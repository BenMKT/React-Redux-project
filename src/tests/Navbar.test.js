import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the navigation bar correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
  });
});
