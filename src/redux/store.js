/* eslint-disable import/no-extraneous-dependencies */
import createStore from 'redux';
import rootReducer from './categoryReducer';

const store = createStore(rootReducer);

export default store;
