/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Detailspage.css';

function DetailsPage() {
  const selectedCategoryId = useSelector((state) => state.selectedCategoryId);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_CATEGORIES', payload: data.data });
      });
  }, [dispatch]);

  const selectedCategory = categories.find(
    (category) => category.mal_id === selectedCategoryId,
  );

  return (
    <div className="details_container">
      {selectedCategory && (
        <>
          <img
            className="images"
            src={selectedCategory.images.jpg.image_url}
            alt={selectedCategory.image_url}
          />
          <table className="details_table" key={selectedCategory.mal_id}>
            <tbody>
              <tr>
                <td className="bold">mal_id</td>
                <td>{selectedCategory.mal_id}</td>
              </tr>
              <tr>
                <td className="bold">title</td>
                <td>{selectedCategory.title}</td>
              </tr>
              <tr>
                <td className="bold">season</td>
                <td>{selectedCategory.season}</td>
              </tr>
              <tr>
                <td className="bold">episodes</td>
                <td>{selectedCategory.episodes}</td>
              </tr>
              <tr>
                <td className="bold">favorites</td>
                <td>{selectedCategory.favorites}</td>
              </tr>
              <tr>
                <td className="bold">status</td>
                <td>{selectedCategory.status}</td>
              </tr>
              <tr>
                <td className="bold">popularity</td>
                <td>{selectedCategory.popularity}</td>
              </tr>
              <tr>
                <td className="bold">members</td>
                <td>{selectedCategory.members}</td>
              </tr>
              <tr>
                <td className="bold">duration</td>
                <td>{selectedCategory.duration}</td>
              </tr>
              <tr>
                <td className="bold">rank</td>
                <td>{selectedCategory.rank}</td>
              </tr>
              <tr>
                <td className="bold">rating</td>
                <td>{selectedCategory.rating}</td>
              </tr>
              <tr>
                <td className="bold">score</td>
                <td>{selectedCategory.score}</td>
              </tr>
              <tr>
                <td className="bold">scored_by</td>
                <td>{selectedCategory.scored_by}</td>
              </tr>
              <tr>
                <td className="bold">year</td>
                <td>{selectedCategory.year}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default DetailsPage;
