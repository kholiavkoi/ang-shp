import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ProductsComponent } from './pages/products/products.component'
import { NewProductComponent } from './pages/new-product/new-product.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:username',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'new-product',
    component: NewProductComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
