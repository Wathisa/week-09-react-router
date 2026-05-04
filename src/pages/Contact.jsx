import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (message.trim() === "") {
      setStatus("Please type a message before submitting.");
      setStatusType("error");
      return;
    }

    setStatus("Your message has been sent.");
    setStatusType("success");
    setMessage("");
  }

  return (
    <section className="content-card">
      <h1 className="content-card__title">Contact Us</h1>
      <p className="content-card__text">
        Reach out to our team for product questions or order support.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-form__label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="contact-form__message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setStatus("");
            setStatusType("");
          }}
          rows="4"
        />

        <button type="submit" className="button button--primary contact-form__button">
          Send Message
        </button>

        {status && (
          <p className={`contact-form__status contact-form__status--${statusType}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
