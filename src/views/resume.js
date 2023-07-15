import jsPDF from "jspdf";
import { html } from "lit";

const downloadResume = () => {
  const content = document.getElementById("resume");

  const doc = new jsPDF();

  doc.html(content, {
    callback: function (pdf) {
      pdf.save("resume.pdf");
    },
  });
};

export default () => html`
  <div id="resume" class="resume">
    <left-side-resume></left-side-resume>
    <right-side-resume></right-side-resume>
  </div>
  <!-- <button @click=${downloadResume}>Download Resume</button> -->
`;
