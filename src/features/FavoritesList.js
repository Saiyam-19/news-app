import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../reducers/favoritesReducer';
import '../NewsList.css'

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (article) => {
    dispatch(removeFavorite(article));
  };

  const favoriteArticles = favorites.map((article) => (
    <div key={article.url} className="article">
      <a href={article.url}>
        <h3>{article.title}</h3>
        <img src={article.urlToImage} className="article-image" />
      </a>
      <p>{article.description}</p>
      <button onClick={() => handleRemoveFavorite(article)}>
        Remove Favorite
      </button>
    </div>
  ));

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteArticles.length > 0 ? (
        favoriteArticles
      ) : (
        <p>You have no favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
