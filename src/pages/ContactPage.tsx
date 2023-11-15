import ContactForm from "../components/form/Contact";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <p className="contact-page-info">
        {
          "Are you convinced enough and ready to elevate your product game? Let's turn ideas into innovation! Contact me before your competitors do! You can also reach me on "
        }
        <a
          href="https://www.linkedin.com/in/judith-chukwuka"
          className="linkedin"
          target="_"
        >
          Linkedin
        </a>
      </p>
      <ContactForm />
    </div>
  );
}
