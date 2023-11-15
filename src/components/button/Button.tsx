import "./Button.css";

interface ButtonProps {
  style?: object;
  text: string | React.ReactElement;
  variant: string;
  link?: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

export default function Button({
  style,
  text,
  variant,
  link,
  type,
  handleClick
}: ButtonProps) {
  return (
    <a className="btn-link" href={link} target={link && "_"}>
      <button
        type={type}
        className={variant}
        style={style}
        onClick={handleClick}
      >
        {text}
      </button>
    </a>
  );
}
