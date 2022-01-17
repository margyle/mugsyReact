export interface IRecipesListState {
  value: IRecipeData[] | undefined,
}

export interface IRecipeData {
  recipeId: number;
  recipeSource: string;
  weight: string;
  waterAmount: string;
  waterTemp: string;
  brewTime: string;
}


