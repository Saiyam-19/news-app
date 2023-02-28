import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markFavorite } from "../reducers/newsReducer";

const News = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.news.favorites);

  const isFavorite = favorites.some((favorite) => favorite.url === article.url);

  return (
    <div className="news">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button onClick={() => dispatch(markFavorite({ article }))}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default News;
