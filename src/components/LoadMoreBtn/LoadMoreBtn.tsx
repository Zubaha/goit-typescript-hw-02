import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMoreBtn: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMoreBtn }) => {
  return (
    <button type="button" onClick={loadMoreBtn} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
