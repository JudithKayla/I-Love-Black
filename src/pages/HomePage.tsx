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
        Lorem ipsum dolor sit amet, conse ctetur djsjk skk adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat ut labore et dolore magna aliqua ut. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat ut labore et dolore magna aliqua ut.
      </p>
      <div className="home-page-btns">
        <Button
          text="View my certificates"
          variant="positive"
          style={{ width: "350px" }}
        />
        <Button
          text="View my resume"
          variant="negative"
          style={{ width: "350px" }}
        />
      </div>
    </div>
  );
}
