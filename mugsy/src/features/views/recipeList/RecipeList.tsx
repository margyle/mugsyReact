import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './landerCard.module.scss';
import { getRecipeList } from './recipeListSlice'

export const RecipeList: React.FC = () => {
  const recipeList = useAppSelector(getRecipeList);
  const dispatch = useAppDispatch();
  let populatedRecipeList: any = [];

  const populateList = () => {
    if (recipeList !== undefined) {
      recipeList.forEach((listItem) => {

        console.log(listItem)
      }
      );
      // return populatedRecipeList;
    }
    else {
      console.log('undefined');
    }
  }

  useEffect(() => {
    populateList();
    console.log('firing');
  });


  return (
    <div>
      <Container>
        {/* <div>{recipeList}</div> */}
      </Container>
    </div>
  )
};
