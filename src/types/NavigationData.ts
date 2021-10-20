export enum Section {
  Claim = 'Claim',
  Swap = 'Swap',
}

export interface NavigationData {
  currentSection: Section;
}
