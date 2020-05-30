import { createStore, combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import { todos } from './todos/reducers';
import { dealerCards, playerCards, status } from './reducers';


const reducers = {
  status,
  dealerCards,
  playerCards,
};

// const persistConfig = {
//   key: 'root',
  // storage, // for persistence
  // stateReconciler: autoMergeLevel2, // for persistence
// }

const rootReducer = combineReducers(reducers);
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const configureStore = () => createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const configureStore = () => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && // hook into browser extension
  window.__REDUX_DEVTOOLS_EXTENSION__()
);