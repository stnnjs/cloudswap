import { NavigationData } from './NavigationData';
import { CalculationData } from './CalculationData';

export interface AppState {
  calculation: CalculationData;
  navigation: NavigationData;
}
