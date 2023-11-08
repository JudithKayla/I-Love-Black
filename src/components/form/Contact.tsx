import "./Contact.css";
import { useRef, useState } from "react";
import Button from "../button/Button";
import emailjs from "@emailjs/browser";
import Spinner from "../spinner/Spinner";
import ErrorModal from "../../error/ErrorModal";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_gefjcfa",
          "template_rmc5sku",
          form.current,
          "CESnAs8lKD7cGhNT0"
        )
        .then(
          (result) => {
            console.log(result);
            if (result.text == "OK") {
              setSubmitted(true);
              setSubmitting(false);
            }
          },
          (error) => {
            console.error(error);
            setError(true);
            setSubmitting(false);
          }
        );
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="submitted-container">
          <h1 className="submitted-text">
            Thank you! I have recieved your message and will reply shortly
          </h1>
          <img src="/assets/envelope.jpeg" />
          <Button
            variant="negative"
            text="Send new mesage"
            handleClick={() => setSubmitted(false)}
            style={{ width: "100%" }}
          />
        </div>
      ) : (
        <div className="form-div">
          {error && <ErrorModal />}
          <form ref={form} onSubmit={handleSubmit}>
            <input type="hidden" name="_next" value="#" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="name-input">
              <div className="input-container">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" required />
              </div>
              <div className="input-container">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" required />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={9} required></textarea>
            </div>
            <Button
              type="submit"
              variant={submitting ? "submitting" : "negative"}
              style={{ width: "100%", marginTop: "20px" }}
              text={submitting ? <Spinner /> : "Submit"}
            />
          </form>
        </div>
      )}
    </div>
  );
}
