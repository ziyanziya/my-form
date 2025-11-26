document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbxqDEM0AsSREX7AX6AnITim6QtRt2ZgYPXt96oJcWmGH6QvkWKm3nYeDN10fEIPy17R/exec", {
        method: "POST",
        body: form
    })
    .then(res => res.text())
    .then(data => {
        alert("✔ تم إرسال البيانات بنجاح");
        this.reset();
    })
    .catch(err => {
        alert("❌ فشل الإرسال: تأكد من الرابط");
        console.error(err);
    });
});

