import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { requestAllPhotos } from "./components/services/api";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchPhotos = async () => {
      try {
        const data = await requestAllPhotos();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
        console.log("Error: ", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []);
  return (
    <>
      <SearchBar />
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage errorMessage={error} />}
      {Array.isArray(photos) && <ImageGallery photos={photos} />}
    </>
  );
}

export default App;
