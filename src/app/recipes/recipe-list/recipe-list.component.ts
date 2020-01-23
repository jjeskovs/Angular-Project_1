import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model"


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe ("A test Recipe", "This is a simple test", "https://cdn.theatlantic.com/assets/media/img/mt/2016/08/badfood/lead_720_405.jpg?mod=1533691839" ),
    
    new Recipe ("A test Recipe 2", "This is not a simple test", "https://cdn.theatlantic.com/assets/media/img/mt/2016/08/badfood/lead_720_405.jpg?mod=1533691839" )
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
