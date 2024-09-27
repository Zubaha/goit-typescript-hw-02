import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.container}>
      <h2 className={css.message}>{message}!</h2>
    </div>
  );
};

export default ErrorMessage;
