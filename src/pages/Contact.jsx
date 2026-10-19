import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section>
      <h1>Contact Us</h1>
      {sent ? (
        <p className="form-success">Message sent! We will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
