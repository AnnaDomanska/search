import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UniversitiesListComponent } from './components/universities-list/universities-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { UniversitiesListComponentModule } from './components/universities-list/universities-list.component-module';
import { UniversityServiceModule } from './services/university.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product-search', component: ProductListComponent }, { path: 'search-universities', component: UniversitiesListComponent }]), ProductListComponentModule, ProductServiceModule, UniversitiesListComponentModule, UniversityServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
