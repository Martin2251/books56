import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";

const Favourites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  console.log(favorites)
  return (
    <div className="favorites">
      { favorites > 0 ? favorites.map((book) => (
        <div key={book.id} className="book">
         
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt="3"></img>
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                remove from favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add to favorites
              </button>
            )}
          </div>
        </div>
      )): <h1>yu dont have any favorites yet...</h1>}
    </div>
  );
};

export default Favourites;
