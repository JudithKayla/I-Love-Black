import "./Button.css";

interface ButtonProps {
  style?: object;
  text: string | React.ReactElement;
  variant: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

export default function Button({
  style,
  text,
  variant,
  type,
  handleClick
}: ButtonProps) {
  return (
    <button type={type} className={variant} style={style} onClick={handleClick}>
      {text}
    </button>
  );
}
