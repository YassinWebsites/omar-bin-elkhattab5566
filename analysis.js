const MAX = {
  arabic: 80,
  math: 60,
  english: 60,
  science: 40,
  social: 40,
  total: 280
};

const student = JSON.parse(localStorage.getItem("student"));

if (!student) {
  window.location.href = "index.html";
}

document.getElementById("studentName").textContent = student.name;

const total =
  student.arabic +
  student.math +
  student.english +
  student.science +
  student.social;

const percentage = Math.round((total / MAX.total) * 100);


let grade = "";
let color = "";

if (percentage >= 90) {
  grade = "ممتاز";
  color = "#16a34a";
} else if (percentage >= 80) {
  grade = "جيد جدًا";
  color = "#2563eb";
} else if (percentage >= 65) {
  grade = "جيد";
  color = "#ca8a04";
} else if (percentage >= 50) {
  grade = "مقبول";
  color = "#ea580c";
} else {
  grade = "راسب";
  color = "#dc2626";
}

const gradeBox = document.getElementById("gradeBox");
gradeBox.textContent = `التقدير العام: ${grade}`;
gradeBox.style.background = color;


const bar = document.getElementById("progressBar");
bar.style.width = percentage + "%";
bar.textContent = percentage + "%";

const subjects = [
  { name: "اللغة العربية", value: student.arabic, max: 80 },
  { name: "الرياضيات", value: student.math, max: 60 },
  { name: "اللغة الإنجليزية", value: student.english, max: 60 },
  { name: "العلوم", value: student.science, max: 40 },
  { name: "الدراسات", value: student.social, max: 40 }
];

const tbody = document.getElementById("analysisBody");

subjects.forEach(sub => {
  const percent = Math.round((sub.value / sub.max) * 100);
  let status = percent >= 60 ? "✔ جيد" : "⚠ محتاج دعم";

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${sub.name}</td>
    <td>${percent}%</td>
    <td>${status}</td>
  `;
  tbody.appendChild(row);
});


const advice = document.getElementById("adviceBox");

if (percentage >= 85) {
  advice.textContent = "أداء ممتاز 👏 استمر على نفس المستوى.";
} else if (percentage >= 65) {
  advice.textContent = "مستوى جيد 👍 حاول تركز أكتر على أضعف مادة.";
} else {
  advice.textContent = "محتاج مجهود أكبر 💪 ركّز على الأساسيات.";
}

function goBack() {
  window.location.href = "students.html";
}
