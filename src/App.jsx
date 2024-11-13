import { useState, useEffect } from "react";

{
  /*

import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
  */
}
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FetchImg from "./Image-api";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const FetchImages = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const response = await FetchImg();
        setIsLoading(false);
        setImages(response);
      } catch (error) {
        console.error(error);
        setError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    FetchImages();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {isError && <h2>Something went wrong</h2>}
    </>
  );
}

export default App;
