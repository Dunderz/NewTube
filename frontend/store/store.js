import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root';
import logger from 'redux-logger';

// const configureStore = (preloadedState = {}) => (
//     createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
// );

const configureStore = (preloadedState = {}) => {
    let middleware = [thunk, logger];
    if (process.env.NODE_ENV === 'production'){
      middleware = [thunk];
    }
    return createStore(
      RootReducer,
      preloadedState,
      applyMiddleware(...middleware)
    );
  };

export default configureStore;