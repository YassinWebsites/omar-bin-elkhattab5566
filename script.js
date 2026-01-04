const MAX_TOTAL = 280;

function login() {
  const name = document.getElementById("studentName").value.trim();
  const seat = document.getElementById("seat").value.trim();
  const msg = document.getElementById("msg");

  if (!name || !seat) {
    msg.textContent = "من فضلك أدخل الاسم ورقم الجلوس";
    return;
  }

  fetch("students.json")
    .then(res => res.json())
    .then(data => {
      const student = data.find(s => s.name === name && s.seat == seat);

      if (!student) {
        msg.textContent = "البيانات غير صحيحة";
        return;
      }

      localStorage.setItem("student", JSON.stringify(student));
      window.location.href = "students.html";
    })
    .catch(() => {
      msg.textContent = "خطأ في تحميل البيانات";
    });
}

/* صفحة النتيجة */
if (window.location.pathname.includes("students.html")) {
  const student = JSON.parse(localStorage.getItem("student"));

  if (!student) {
    window.location.href = "index.html";
  } else {
    const total =
      (student.arabic ?? 0) +
      (student.math ?? 0) +
      (student.english ?? 0) +
      (student.science ?? 0) +
      (student.social ?? 0);

    const percentage = ((total / MAX_TOTAL) * 100).toFixed(2);

    document.getElementById("name").textContent = student.name;

document.getElementById("arabic").textContent = student.arabic ?? 0;
document.getElementById("math").textContent = student.math ?? 0;
document.getElementById("english").textContent = student.english ?? 0;
document.getElementById("science").textContent = student.science ?? 0;
document.getElementById("social").textContent = student.social ?? 0;

document.getElementById("total").textContent = total;

document.getElementById("religion").textContent = student.religion ?? 0;
document.getElementById("art").textContent = student.art ?? 0;
document.getElementById("sport").textContent = student.sport ?? 0;
document.getElementById("ict").textContent = student.ict ?? 0;

document.getElementById("highlevel1").textContent =
  student.highlevel1 ?? "غير مضاف";
document.getElementById("highlevel2").textContent =
  student.highlevel2 ?? "غير مضاف";

document.getElementById("activity1").textContent = student.activity1 ?? 0;
document.getElementById("activity2").textContent = student.activity2 ?? 0;

document.getElementById("percentage").textContent =
    `النسبة المئوية: ${percentage}%`;
    document.querySelector(".container").appendChild(percent);
  }
}
