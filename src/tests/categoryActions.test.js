import setCategories from '../redux/categoryActions';

describe('setCategories action creator', () => {
  test('creates an action object with the correct type and payload', () => {
    const categories = [{ id: 1, name: 'Category 1' }];
    const action = setCategories(categories);

    // Check if the action has the correct type
    expect(action.type).toBe('SET_CATEGORIES');

    // Check if the action has the correct payload
    expect(action.payload).toEqual(categories);
  });
});
