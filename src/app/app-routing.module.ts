import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { TvComponent } from './tv/tv.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'add',component:AddproductComponent},
  {path:'tv',component:TvComponent},
  {path:'mobile',component:MobileComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'update/:id',component: UpdateproductComponent},
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'del/:id',component:DeleteproductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'product',component:ProductComponent},
  {path:'p',component:ProductsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
