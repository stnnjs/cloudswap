import { createAction } from './helpers/actionCreator';
import { Section } from '../types/NavigationData';

export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION';

export const setCurrentSection = (section: Section) => createAction(SET_CURRENT_SECTION, { section });
