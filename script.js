const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyDS3e2uJ1NpATq9OluedrQOsnGoUN5c_lxyurX5N6ddDTJrfKqP-b8Z06mju5q0s0L/exec";

// حساب الفئة حسب تاريخ الميلاد
document.getElementById("birthdate").addEventListener("change", function () {
    const birthYear = new Date(this.value).getFullYear();
    const categoryInput = document.getElementById("category");

    let category = "";

    if (birthYear > 2014) category = "البراعم";
    else if (birthYear >= 2011) category = "الأصاغر";
    else if (birthYear >= 2005) category = "الأشبال";
    else category = "خارج التصنيف";

    categoryInput.value = category;
});

// إرسال البيانات
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        fullname: document.getElementById("fullname").value,
        birthdate: document.getElementById("birthdate").value,
        school: document.getElementById("school").value,
        category: document.getElementById("category").value
    };

    fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(r => r.text())
    .then(res => {
        alert("✔ تم إرسال معلوماتك بنجاح!");
        document.getElementById("myForm").reset();
        console.log("Response:", res);
    })
    .catch(err => {
        alert("❌ فشل الإرسال. تحقق من الرابط.");
        console.error(err);
    });
});
