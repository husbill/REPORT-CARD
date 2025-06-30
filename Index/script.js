document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const studentClass = document.getElementById("class").value;
  const math = Number(document.getElementById("math").value);
  const english = Number(document.getElementById("english").value);
  const science = Number(document.getElementById("science").value);

  const total = math + english + science;
  const average = (total / 3).toFixed(2);
  let grade, remark;

  if (average >= 70) {
    grade = "A";
    remark = "Excellent";
  } else if (average >= 50) {
    grade = "B";
    remark = "Good";
  } else {
    grade = "C";
    remark = "Needs Improvement";
  }

  const report = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Class:</strong> ${studentClass}</p>
    <p><strong>Math:</strong> ${math}</p>
    <p><strong>English:</strong> ${english}</p>
    <p><strong>Science:</strong> ${science}</p>
    <p><strong>Total:</strong> ${total}</p>
    <p><strong>Average:</strong> ${average}</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>Remark:</strong> ${remark}</p>
  `;

  document.getElementById("reportContent").innerHTML = report;
  document.getElementById("reportOutput").classList.remove("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.getElementById("reportContent");
  html2pdf().from(element).save("report-card.pdf");
});
