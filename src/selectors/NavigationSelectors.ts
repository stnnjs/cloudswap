import { AppState } from '../types/AppState';

export const selectCurrentSection = ({ navigation }: AppState) => navigation.currentSection;
