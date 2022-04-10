export interface IRecipeStepsState {
  value: IRecipeStep[] | undefined,
}

//a bunch of these should eventually be updated to enums/looksups/etc -maos
export interface IRecipeStep {
  stepSection: string;
  stepDetail: {
    stepAttribute: {
      stepAttributeType: string,
      stepAttributeValue: number,
      stepAttributeUnit: string,
    }
  }[] | undefined,
}


