import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNews } from '../reducers/newsReducer';
import { addFavorite, removeFavorite } from '../reducers/favoritesReducer';
import '../NewsList.css';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);
  const favorites = useSelector((state) => state.favorites);
  const categoryFilter = useSelector((state) => state.filters.category);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  const handleFavoriteClick = (article) => {
    if (favorites.some((favorite) => favorite.url === article.url)) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    const filteredNews =
      categoryFilter === ''
        ? news
        : news.filter((article) => article.category === categoryFilter);
    content = filteredNews.map((article) => (
      <div key={article.url} className="article">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="article-image" />
        )}
        <h3>
          <a href={article.url} target="_blank" rel="noreferrer">
            {article.title}
          </a>
        </h3>
        <p>{article.description}</p>
        <button onClick={() => handleFavoriteClick(article)}>
          {favorites.some((favorite) => favorite.url === article.url)
            ? 'Remove Favorite'
            : 'Add Favorite'}
        </button>
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h2>News</h2>
      <div className="articles-container">{content}</div>
    </div>
  );
};

export default NewsList;
