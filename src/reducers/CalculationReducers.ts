import { AnyAction } from 'redux';
import { CalculationData } from '../types/CalculationData';
import { SET_CALCULATION_AMOUNT, SET_CALCULATION_FROM, SET_CALCULATION_TO, SET_SHOULD_SHOW_RESULT } from '../actions/calculationActions';

export const calculationInitialState: CalculationData = {
  amount: 0,
  from: '',
  shouldShowResult: false,
  to: '',
};

export function CalculationReducer(state = calculationInitialState, action: AnyAction): CalculationData {
  switch (action.type) {
    case SET_CALCULATION_AMOUNT:
      return { ...state, amount: action.amount };
    case SET_SHOULD_SHOW_RESULT:
      return { ...state, shouldShowResult: Boolean(action.shouldShow) };
    case SET_CALCULATION_FROM:
      return { ...state, from: action.from };
    case SET_CALCULATION_TO:
      return { ...state, to: action.to };
    default:
      return state;
  }
}
