const initialState = {
  categories: [],
  selectedCategoryId: null, // Track the selected category ID
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategoryId: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
