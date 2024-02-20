import "./galleryCard.css";

export default function GalleryCard({ name, imgURL, alt }) {
  return (
    <div className="dog-container shrink">
      <img src={imgURL} alt={alt} />
      <h3>{name}</h3>
    </div>
  );
}
