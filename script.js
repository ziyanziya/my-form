// اضبط هذا المتغير إلى رابط الـ Apps Script (الـ Web App URL) الخاص بك
const SCRIPT_URL = "PUT_YOUR_SCRIPT_URL_HERE"; // example: https://script.google.com/macros/s/AKfyc.../exec

const form = document.getElementById('surveyForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'status';

    const data = {};
    new FormData(form).forEach((v, k) => data[k] = v.trim());

    // تحقق بسيط
    if (!data.email) {
        status.textContent = 'الرجاء إدخال البريد الإلكتروني.';
        status.classList.add('err');
        return;
    }

    try {
        const resp = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!resp.ok) throw new Error('المخدم رد بخطأ');
        const json = await resp.json();

        if (json.status && json.status === 'success') {
            status.textContent = 'تم الإرسال بنجاح. شكراً لك!';
            status.classList.add('ok');
            form.reset();
        } else {
            status.textContent = json.error || 'حصل خطأ أثناء الإرسال.';
            status.classList.add('err');
        }

    } catch (err) {
        console.error(err);
        status.textContent = 'فشل الاتصال. تأكد من رابط Apps Script وأنه منشور ويسمح بالوصول.';
        status.classList.add('err');
    }
});
