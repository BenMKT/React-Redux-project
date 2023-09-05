import categoryReducer from '../redux/categoryReducer';

describe('categoryReducer', () => {
  it('should set the categories', () => {
    const initialState = {
      categories: [],
    };

    const categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    const action = {
      type: 'SET_CATEGORIES',
      payload: categories,
    };

    const nextState = categoryReducer(initialState, action);

    expect(nextState.categories).toEqual(categories);
  });
});
