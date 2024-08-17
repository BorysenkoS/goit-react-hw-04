import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.photosList}>
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard url={photo.urls.small} alt={photo.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;

// return photos.map((photo) => {
//   return (
//     <div key={photo.id}>
//       <ul className={css.photosList}>
//         {/* Набір елементів списку із зображеннями */}
//         <li className={css.photosItem}>
//           <img
//             className={css.photos}
//             src={photo.urls.small}
//             alt={photo.alt_description}
//             width={300}
//           />
//         </li>
//       </ul>
//     </div>
//   );
// });
