import Description from "../components/portfolio/Description";
import Item from "../components/portfolio/Item";
import { portfoliioData } from "../data/portfolio-data";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      {portfoliioData().map((data, index) => (
        <Item
          key={index}
          link={data.link}
          imgUrl={data.imgUrl}
          description={
            <Description
              product={data.product}
              title={data.title}
              company={data.company}
              location={data.location}
              timespan={data.timespan}
              text={data.text}
            />
          }
        />
      ))}
    </div>
  );
}
