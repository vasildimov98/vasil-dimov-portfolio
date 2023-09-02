import { html } from "lit";
import emailjs from "@emailjs/browser";

const submitFormHandler = function (e) {
  e.preventDefault();
  // generate a five digit number for the contact_number variable
  this.contact_number.value = (Math.random() * 100000) | 0;
  // these IDs from the previous steps
  emailjs.sendForm("service_co8w08j", "contact_form_vasil", this).then(
    function () {
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  this.reset();
};

export default () => html`
  <div class="contact">
    <h1 class="contact__heading heading-primary">Contact Me</h1>
    <p class="contact__paragraph paragraph">
      If you want to get in touch, talk to me about a project collaboration or
      just say hi, fill up the awesome form below or send an email. I will try
      to reply as soon as possible!
    </p>

    <form class="contact__form" @submit="${submitFormHandler}">
      <h3 class="heading-tertiary">Say Hi 👋</h3>
      <input type="hidden" name="contact_number" />
      <div class="contact__group">
        <label for="name" class="contact__label">Name</label>
        <input
          type="text"
          class="contact__input"
          placeholder="Name"
          id="name"
          required
          name="user_name"
        />
      </div>
      <div class="contact__group">
        <label for="email" class="contact__label">Email</label>
        <input
          type="email"
          class="contact__input"
          placeholder="Email"
          id="email"
          required
          name="user_email"
        />
      </div>
      <div class="contact__group">
        <label for="message" class="contact__label">Message</label>
        <textarea
          class="contact__input"
          placeholder="Message"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn">Send Email</button>
    </form>
  </div>
`;
