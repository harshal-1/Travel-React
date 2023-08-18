import axios from "axios";
import React, { useState } from "react";

import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/e0aeaff4-97e5-43b0-88de-05c905aa01cf",
        form
      )
      .then((response) => {
        console.log(response);
        //Clearing form fields
        setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs abcd">Contact Us</h2>

      <div className="contact__container container grid">

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact__form-input"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact__form-input"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact__form-input"
            ></textarea>

            <div className="contact__submit">
              <p>* Accept the terms and conditions.</p>
              <button type="submit" className="btnn text-cs">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
