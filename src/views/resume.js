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
  <div id="resume">
    <h1>Resume</h1>
  </div>

  <button @click=${downloadResume}>Download Resume</button>
`;
