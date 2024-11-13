import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
