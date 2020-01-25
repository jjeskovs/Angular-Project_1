import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe (
            "Meatballs", 
            "American Meatball", 
            "https://cdn.theatlantic.com/assets/media/img/mt/2016/08/badfood/lead_720_405.jpg?mod=1533691839",
            [
                new Ingredient('Meat', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Shot of Vodka', 5)
            ]),
        new Recipe (
            "Burger", 
            "Meat-lover burger with fries", 
            "https://www.jocooks.com/wp-content/uploads/2016/12/chimichurri-meatballs-1-4-1-768x960.jpg",
            [
                new Ingredient('Ground beef', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Potato', 2),
                new Ingredient('Milk', 1)
            ]),
    ];
    
    constructor(private slService: ShoppingListService){}
    
    getRecipes() {
          return this.recipes.slice(); // slice makes a copy of an array, hence we cannot make any changes to the original array
    }


    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
