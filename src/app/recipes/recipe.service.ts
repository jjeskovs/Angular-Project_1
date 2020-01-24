import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe ("A test Recipe", "This is a simple test", "https://cdn.theatlantic.com/assets/media/img/mt/2016/08/badfood/lead_720_405.jpg?mod=1533691839" ),
        
        new Recipe ("A test Recipe 2", "This is not a simple test", "https://cdn.theatlantic.com/assets/media/img/mt/2016/08/badfood/lead_720_405.jpg?mod=1533691839" )
      ];
      getRecipes() {
          return this.recipes.slice(); // slice makes a copy of an array, hence we cannot make any changes to the original array
      }
}
