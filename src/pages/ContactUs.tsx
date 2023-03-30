import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <h2>Contact Us</h2>
      <div className="container">
        <form>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" />
          </fieldset>
          <fieldset>
            <label htmlFor="mesage">Message</label>
            <textarea name="message" id="message" required></textarea>
          </fieldset>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
