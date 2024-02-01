import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormComponent } from './components/form/form.component'
import { FormsModule } from '@angular/forms'
import { FormDetailsComponent } from './components/form-details/form-details.component'
import { FormService } from './services/form.service'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { MenuComponent } from './components/menu/menu.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { ProductsComponent } from './pages/products/products.component';
import { NewProductComponent } from './pages/new-product/new-product.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDetailsComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ProductDetailsComponent,
    ProductsComponent,
    NewProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [FormService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
