import "./Item.css";
import Button from "../button/Button";

interface ItemProps {
  imgUrl: string;
  description: React.ReactElement;
}

export default function Item({ imgUrl, description }: ItemProps) {
  return (
    <div className="portfolio-item">
      <div className="item-tile">
        <div className="item-img-div">
          <img className="item-img" src={imgUrl} />
        </div>
        <div></div>
        <Button
          text="View Live"
          variant="negative"
          style={{ width: "100%", marginTop: "30px" }}
        />
      </div>
      {description}
    </div>
  );
}
