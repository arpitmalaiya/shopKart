import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { EditAddProductComponent } from './product-list/edit-add-product/edit-add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    redirectTo:'productList'
  },
  {
    path:'productList',
    component:ProductListComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'productDetails',
    component:EditAddProductComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'productDetails/:idx',
    component:EditAddProductComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'shoppingCart',
    component: ShoppingListComponent,
  },
  {
    path: 'auth',
    component : AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
