import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

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

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(... ingredients)  // the spread operator (...) that turns an array of elements into the list of elements. 
        this.ingredientsChanged.emit(this.ingredients.slice()) // the send the copy of the array
    }
} 