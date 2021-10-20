import { AppState } from '../types/AppState';

export const selectCalculationAmount = ({ calculation }: AppState) => calculation.amount;
export const selectCalculationFrom = ({ calculation }: AppState) => calculation.from;
export const selectCalculationTo = ({ calculation }: AppState) => calculation.to;
export const selectShouldShowResult = ({ calculation }: AppState) => calculation.shouldShowResult;
