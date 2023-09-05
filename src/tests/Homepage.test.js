/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../redux/categoryReducer';
import Homepage from '../components/Homepage';
import '@testing-library/jest-dom';

describe('Homepage', () => {
  it('should render the title', () => {
    const store = createStore(rootReducer);
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );
    expect(container.querySelector('.grid-container')).toBeInTheDocument();
  });

  it('should render the category items', () => {
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
      },
      {
        mal_id: 2,
        title: 'My Hero Academia',
        images: {
          jpg: {
            image_url:
              'https://myanimelist.net/cdn/images/anime/13139/104946.jpg',
          },
        },
      },
    ];
    const store = createStore(rootReducer, { categories });
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );
    expect(getAllByTestId('category-item').length).toBe(2);
    expect(getAllByTestId('category-item')[0]).toHaveTextContent(
      'Attack on Titan',
    );
    expect(getAllByTestId('category-item')[1]).toHaveTextContent(
      'My Hero Academia',
    );
  });
});
