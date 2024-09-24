import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ loadMoreBtn }) {
  return (
    <button type="button" onClick={loadMoreBtn} className={css.button}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
