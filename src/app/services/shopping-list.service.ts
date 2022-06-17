import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService { 
  emitIngredient = new Subject<Ingredient[]>();
  startedEditing  = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 9),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitIngredient.next(this.ingredients.slice());
  }
  addIngredientsfromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitIngredient.next(this.ingredients.slice());
  }
  updateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index]= newIngredient;
    this.emitIngredient.next(this.ingredients.slice());

  }
  deleteIngredient(index:number){
    this.ingredients.splice(index, 1);
    this.emitIngredient.next(this.ingredients.slice());
  }
}
