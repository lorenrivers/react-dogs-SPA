import { dogInfo } from "./Components/dogInfo";
import GalleryCard from "./Components/GalleryCard";
import "./gallery.css";
import { useSearchParams, Link } from "react-router-dom"; //useSearchParams is a hook

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get("sort"); // searching for a query param that starts with sort. Use .get on whatever you want the user to search for.

  const copy = [...dogInfo];

  if (sortType == "asc") {
    copy.sort(handleSort);
  } else if (sortType == "desc") {
    copy.sort(handleSort).reverse();
  }

  function handleSort(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <div>
      <h2>Gallery 🐕</h2>
      <div>
        <div id="sortButtons">
          <Link to="/gallery?sort=asc">Sort Alphabetically</Link>
          <Link to="/gallery?sort=desc">Sort Reverse Alphabet</Link>
          <Link to="/gallery">No sort</Link>
        </div>
        <div className="gallery-container">
          {dogInfo.map((dog) => (
            <GalleryCard
              key={dog.id}
              name={dog.name}
              imgURL={dog.imgURL}
              alt={dog.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
