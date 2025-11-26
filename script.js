document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbxiJbH0cF9xsbIi116kCVqOu9TBi3QI25Nj8a-_-TvknSGi-if5SJoB__fPWMhjM6eW/exec", {
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


