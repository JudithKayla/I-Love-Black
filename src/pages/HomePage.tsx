import Button from "../components/button/Button";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div id="home" className="home-page">
      <div className="heading">
        <div className="heading-text">
          <h1>JUDITH</h1>
          <h1>CHUKWUKA</h1>
        </div>
        <img className="cpm-logo" src="/assets/cpm.png" />
      </div>
      <h1 className="job-title">Certified Product Manager (AIPMM)</h1>
      <p className="description">
        Experienced and results-driven Certified Product Manager with a strong
        background in SAAS, B2B/B2C and Startups environments. In my 2+ years as
        a product manager, I have consistently leveraged my expertise to drive
        the development and delivery of innovative products that meet and exceed
        customer expectations. I thrive in cross-functional teams, working
        closely with stakeholders, engineering, design, and marketing teams to
        ensure seamless product development and successful launches.
      </p>
      <div className="home-page-btns">
        <div style={{ width: "350px" }}>
          <Button
            text="View my certificates"
            variant="positive"
            link="https://certificates.aipmm.com/3228916f-bd41-42c1-9ce0-9439f8d9318a#gs.0ylz8s"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ width: "350px" }}>
          <Button
            text="View my resume"
            variant="negative"
            link="https://drive.google.com/file/d/1_R_7NvO517Q2s_WJ2OAo4Rams1poIuBp/view?usp=drive_link"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
