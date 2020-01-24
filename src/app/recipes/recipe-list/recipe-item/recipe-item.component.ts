import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // here we loading the Model Recipe and pass it along to a single recipe that we send to recipe-item.component
  
  constructor(private recipeService: RecipeService ) { } // here we are injecting the service into the component. 
  
  ngOnInit() {
  }


  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);  // here we are passing the recipe we have selected. 
  }

}




