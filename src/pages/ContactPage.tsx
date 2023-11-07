import ContactForm from "../components/form/Contact";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <p className="contact-page-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <ContactForm />
    </div>
  );
}
