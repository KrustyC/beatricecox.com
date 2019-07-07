import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === `HIDE_OVERLAY`) {
    return { ...state, showOverlay: false };
  }
  return state;
};

const initialState = { showOverlay: true };

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;
