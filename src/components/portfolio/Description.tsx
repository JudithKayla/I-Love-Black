import { useEffect, useState } from "react";
import "./Description.css";

interface DescriptionProps {
  product: string;
  title: string;
  company: string;
  location: string;
  timespan: string;
  text: string;
}

export default function Description({
  product,
  title,
  company,
  location,
  timespan,
  text
}: DescriptionProps) {
  const [showFullText, setShowFullText] = useState(false);
  const [sliceValue, setSliceValue] = useState(525);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setSliceValue(300);
      } else {
        setSliceValue(525);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="item-description">
      <h3>{product}</h3>
      <hr />
      <div className="portfolio-description-item">
        <img src="/assets/person.png" />
        <p>{title}</p>
      </div>
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
      <p className="item-desc-text">
        {showFullText ? text : `${text.slice(0, sliceValue)}...`}
        {text.length > 525 && (
          <span className="read-more" onClick={toggleText}>
            {showFullText ? "Read Less" : "Read More"}
          </span>
        )}
      </p>
    </div>
  );
}
