import css from "./ImageCard.module.css";

interface ImageCardProps {
  small: string;
  description: string | null;
  regular: string;
  openModal: (image: {
    urls: { regular: string };
    description: string | null;
  }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  small,
  description,
  regular,
  openModal,
}) => {
  return (
    <img
      className={css.modalImg}
      src={small}
      alt={description || "Image"}
      onClick={() => openModal({ urls: { regular }, description })}
    />
  );
};

export default ImageCard;
