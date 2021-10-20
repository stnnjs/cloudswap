import { combineReducers } from 'redux';
import { CalculationReducer } from './CalculationReducers';
import { NavigationReducer } from './NavigationReducer';

const appReducer = () =>
  combineReducers({
    calculation: CalculationReducer,
    navigation: NavigationReducer,
  });

export default appReducer;
