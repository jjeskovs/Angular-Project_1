import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>(); // in order to add the new ingredient to the array, we created this event emitter.
    
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
    ];

    getIngredients() {
        return this.ingredients.slice(); // like before this makes a copy of my array

    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}