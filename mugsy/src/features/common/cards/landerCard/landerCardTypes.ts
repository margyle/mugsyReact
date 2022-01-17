export interface ILanderCardState {
  value: ILanderCardData[] | undefined,
}

export interface ILanderCardData {
  cardType: string;
  title?: string;
  message?: string;
  action?: string;
  currentLocation?: string;
  nextLocation?: string;
  img: string;
}