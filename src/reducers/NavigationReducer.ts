import { AnyAction } from 'redux';
import { NavigationData, Section } from '../types/NavigationData';
import { SET_CURRENT_SECTION } from '../actions/navigationActions';

export const navigationInitialState: NavigationData = {
  currentSection: Section.Swap,
};

export function NavigationReducer(state = navigationInitialState, action: AnyAction): NavigationData {
  switch (action.type) {
    case SET_CURRENT_SECTION:
      return { ...state, currentSection: action.section };
    default:
      return state;
  }
}
