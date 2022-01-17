export interface IRecipesListState {
  value: IRecipeListItem[] | undefined,
}

export interface IRecipeListItem {
  recipeId: number;
  recipeSource: string;
  weight: string;
  waterAmount: string;
  waterTemp: string;
  brewTime: string;
}


