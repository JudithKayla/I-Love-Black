import "./Divider.css";

export default function Divider({ text }: { text: string }) {
  return (
    <div
      id={text === "Product Portfolio" ? "portfolio" : "contact"}
      className="divider"
    >
      <hr className="divider-bar" />
      <h1 className="divider-text">{text}</h1>
      <hr className="divider-bar" />
    </div>
  );
}
