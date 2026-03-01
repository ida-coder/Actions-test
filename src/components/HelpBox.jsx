import "./HelpBox.css";

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h1>{title}</h1>
      <p>{text}</p>
      <button>Learn more</button>
    </article>
  );
}

export default HelpBox;
