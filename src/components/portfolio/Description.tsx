import "./Description.css";

interface DescriptionProps {
  title: string;
  company: string;
  location: string;
  timespan: string;
  text: string;
}

export default function Description({
  title,
  company,
  location,
  timespan,
  text
}: DescriptionProps) {
  return (
    <div className="item-description">
      <h3>{title}</h3>
      <hr />
      <div className="portfolio-description-item">
        <img src="/assets/company.png" />
        <p>{company}</p>
      </div>
      <div className="portfolio-description-item">
        <img src="/assets/pin.png" />
        <p>{location}</p>
      </div>
      <div className="portfolio-description-item">
        <img src="/assets/hour-glass.png" />
        <p>{timespan}</p>
      </div>
      <p className="item-desc-text">{text}</p>
    </div>
  );
}
