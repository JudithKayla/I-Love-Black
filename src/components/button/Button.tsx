import "./Button.css";

interface ButtonProps {
  style?: object;
  text: string;
  variant: string;
}

export default function Button({ style, text, variant }: ButtonProps) {
  return (
    <button className={variant} style={style}>
      {text}
    </button>
  );
}
