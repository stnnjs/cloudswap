export enum Currencies {
  BAT = 'BAT',
  DAI = 'DAI',
  UNI = 'UNI',
  USDC = 'USDC',
  WETH = 'WETH',
}

export interface CalculationData {
  amount: number;
  from: string;
  shouldShowResult: boolean;
  to: string;
}
