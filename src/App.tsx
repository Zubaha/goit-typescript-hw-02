import { useEffect, useState } from "react";
import "./App.css";
import { getImage } from "./data/image-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { ImageData, ApiResponse } from "./types";

function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageData | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchImages = async (): Promise<void> => {
    try {
      setLoading(true);

      const data: ApiResponse = await getImage(query, page);

      setImages((prevImages: ImageData[]) => [...prevImages, ...data.results]);

      setTotalPages(data.total_pages);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setHasMore(true);
    setError(null);
  };

  const openModal = (image: ImageData) => {
    setIsOpen(true);
    setModalImage(image);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setModalImage(null);
  };

  const imageLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

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
