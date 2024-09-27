import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";
import { ImageData } from "../../types";

interface ImageGalleryProps {
  images: ImageData[];
  openModal: (image: ImageData) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, description, urls: { small, regular } }) => (
        <li key={id} className={css.item}>
          <ImageCard
            small={small}
            regular={regular}
            description={description}
            openModal={() =>
              openModal({ id, description, urls: { small, regular } })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
