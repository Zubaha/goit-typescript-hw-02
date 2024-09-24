import { useEffect, useState } from "react";
import "./App.css";
import { getImage } from "./data/image-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const result = await getImage(query, page);
        setHasMore(result.results.length > 0);
        setImages((prevImages) => [...prevImages, ...result.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setHasMore(true);
    setError(null);
  };

  function openModal(image) {
    setIsOpen(true);
    setModalImage(image);
  }

  function closeModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  function imageLoadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 ? (
        <ImageGallery images={images} openModal={openModal} />
      ) : (
        query.length > 0 && <p className="error">No photos</p>
      )}
      {images.length > 0 && hasMore && (
        <LoadMoreBtn loadMoreBtn={imageLoadMore} />
      )}
      <ImageModal
        image={modalImage}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
