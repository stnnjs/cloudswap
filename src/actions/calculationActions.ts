import { createAction } from './helpers/actionCreator';

export const SET_CALCULATION_AMOUNT = 'SET_CALCULATION_AMOUNT';
export const SET_CALCULATION_FROM = 'SET_CALCULATION_FROM';
export const SET_CALCULATION_TO = 'SET_CALCULATION_TO';
export const SET_SHOULD_SHOW_RESULT = 'SET_SHOULD_SHOW_RESULT';

export const setCalculationAmount = (amount: number) => createAction(SET_CALCULATION_AMOUNT, { amount });
export const setCalculationFrom = (from: string) => createAction(SET_CALCULATION_FROM, { from });
export const setCalculationTo = (to: string) => createAction(SET_CALCULATION_TO, { to });
export const setShouldShowResult = (shouldShow: boolean) => createAction(SET_SHOULD_SHOW_RESULT, { shouldShow });
