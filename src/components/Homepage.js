/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const HomePage = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_CATEGORIES', payload: data.data });
      });
  }, [dispatch]);

  return (
    <div className="grid-container">
      {categories.map((category) => (
        <Link
          to={`/details/${category.mal_id}`}
          key={category.mal_id}
          onClick={() => dispatch({
            type: 'SET_SELECTED_CATEGORY',
            payload: category.mal_id,
          })}
        >
          <div className="category-item" data-testid="category-item">
            {' '}
            <div className="category-image-container">
              <img
                className="category-image"
                src={category.images.jpg.image_url}
                alt={category.image_url}
              />
              <div className="category-title">{category.title}</div>
              <div className="category-arrow-container">
                <div className="category-arrow">&#10148;</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
