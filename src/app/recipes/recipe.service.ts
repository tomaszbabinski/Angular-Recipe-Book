import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test recipe',
      'This is simply test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('sausage', 1),
      new Ingredient('spinach', 2)]),
    new Recipe('Another Test recipe',
      'This is simply test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('butter', 3),
      new Ingredient('pepper', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
