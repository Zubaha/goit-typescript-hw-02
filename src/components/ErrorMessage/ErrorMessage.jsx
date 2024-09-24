import css from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return (
    <div className={css.container}>
      <h2 className={css.message}>{message}!</h2>
    </div>
  );
}

export default ErrorMessage;
