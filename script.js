document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbyMIk0DSqlEWHwyBaS90lK9ufg0yZ1Z_KZAv1V71GQxyG3XKAIdFCXfxxl4eFq6jkRB/exec", {
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
