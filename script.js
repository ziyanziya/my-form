document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        fullname: this.fullname.value,
        birthdate: this.birthdate.value,
        school: this.school.value,
        category: this.category.value
    };

    fetch("https://script.google.com/macros/s/AKfycbxiJbH0cF9xsbIi116kCVqOu9TBi3QI25Nj8a-_-TvknSGi-if5SJoB__fPWMhjM6eW/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        alert("✔ تم إرسال البيانات بنجاح");
        this.reset();
    })
    .catch(err => {
        alert("❌ فشل الإرسال");
        console.error(err);
    });
});
