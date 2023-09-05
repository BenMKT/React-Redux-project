import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../redux/categoryReducer';
import DetailsPage from '../components/DetailsPage';
import '@testing-library/jest-dom';

describe('DetailsPage', () => {
  it('should render the details', () => {
    const selectedCategoryId = 1;
    const categories = [
      {
        mal_id: 1,
        title: 'Attack on Titan',
        images: {
          jpg: {
            image_url:
              'https://myanimelist.net/cdn/images/anime/1994/99947.jpg',
          },
        },
        season: 'Spring 2013',
        episodes: 25,
        favorites: 12345,
        status: 'Finished Airing',
        popularity: 1,
        members: 123456,
        duration: '24 min per ep',
        rank: 9,
        rating: 'R - 17+ (violence & profanity)',
        score: 8.5,
        scored_by: 1234567,
        year: 2013,
      },
    ];
    const store = createStore(rootReducer, { categories, selectedCategoryId });
    const { queryAllByText } = render(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    );

    expect(queryAllByText('Attack on Titan')).toHaveLength(1);
    expect(queryAllByText('Spring 2013')).toHaveLength(1);
    expect(queryAllByText('25')).toHaveLength(1);
    expect(queryAllByText('12345')).toHaveLength(1);
    expect(queryAllByText('Finished Airing')).toHaveLength(1);
    expect(queryAllByText('1')[0]).toBeInTheDocument();
    expect(queryAllByText('123456')).toHaveLength(1);
    expect(queryAllByText('24 min per ep')).toHaveLength(1);
    expect(queryAllByText('9')).toHaveLength(1);
    expect(queryAllByText('R - 17+ (violence & profanity)')).toHaveLength(1);
    expect(queryAllByText('8.5')).toHaveLength(1);
    expect(queryAllByText('1234567')).toHaveLength(1);
    expect(queryAllByText('2013')).toHaveLength(1);
  });
});
