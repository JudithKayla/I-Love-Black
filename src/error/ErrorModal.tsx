import "./ErrorModal.css";

export default function ErrorModal() {
  return (
    <div className="error-container">
      <div className="error-message">
        <p>There was an error sending your message.</p>
        <p>Try again, if it persists, please contact me via my email.</p>
      </div>
    </div>
  );
}
