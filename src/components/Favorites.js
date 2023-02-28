import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 && <p>You haven't favorited any articles yet.</p>}
      {favorites.map((article) => (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
