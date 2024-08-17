import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchPhotosApi } from "./components/services/photos-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const onLoadMore = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  useEffect(() => {
    if (searchValue.trim() === "") return;
    const fetchPhotosBySearchValue = async (searchValue) => {
      try {
        setLoading(true);
        const data = await fetchPhotosApi(searchValue, pageNumber);

        setPhotos((prev) => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotosBySearchValue(searchValue);
  }, [searchValue, pageNumber]);

  const onSubmit = (searchTerm) => {
    setPhotos([]);
    setSearchValue(searchTerm);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error !== null && <ErrorMessage errorMessage={error} />}
      {photos.length > 0 && (
        <ImageGallery pageNumber={pageNumber} photos={photos} />
      )}
      {pageNumber < totalPage && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  );
}

export default App;
