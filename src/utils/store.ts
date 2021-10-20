import { AnyAction, createStore } from 'redux';
import { AppState } from '../types/AppState';
import appReducer from '../reducers';

export const rootReducer = (state: AppState | undefined, action: AnyAction) => appReducer()(state, action);

export default function configureStore() {
  const storeCreator = createStore(rootReducer);

  return storeCreator;
}

export const store = configureStore();
