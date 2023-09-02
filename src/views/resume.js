import jsPDF from "jspdf";
import { html } from "lit";

const downloadResume = () => {
  const content = document.getElementById("resume");

  const doc = new jsPDF("p", "mm", "a4");

  doc.html(content.innerHTML, {
    callback: function (pdf) {
      pdf.save("resume.pdf");
    },
  });
};

export default () => html`
  <!-- TODO: Resume examples | Create Resume and Download it from their -->
  <div class="resume-container">
    <button class="btn" @click="${downloadResume}">Download Resume</button>
    <div id="resume" class="resume">
      <left-side-resume></left-side-resume>
      <right-side-resume></right-side-resume>
    </div>
  </div>
`;
