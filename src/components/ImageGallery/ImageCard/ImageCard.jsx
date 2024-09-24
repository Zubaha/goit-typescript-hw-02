import css from "./ImageCard.module.css";

function ImageCard({ small, description, regular, openModal }) {
  return (
    <img
      className={css.modalImg}
      src={small}
      alt={description}
      onClick={() => openModal({ urls: { regular }, description })}
    />
  );
}

export default ImageCard;
