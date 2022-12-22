import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UniversitiesListComponent } from './components/universities-list/universities-list.component';
import { BeersListComponent } from './components/beers-list/beers-list.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { UniversitiesListComponentModule } from './components/universities-list/universities-list.component-module';
import { UniversityServiceModule } from './services/university.service-module';
import { BeersListComponentModule } from './components/beers-list/beers-list.component-module';
import { BeersServiceModule } from './services/beers.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product-search', component: ProductListComponent }, { path: 'search-universities', component: UniversitiesListComponent }, { path: 'beers-list', component: BeersListComponent }, { path: 'crypto-autocomplete', component: CryptoComponent }]), ProductListComponentModule, ProductServiceModule, UniversitiesListComponentModule, UniversityServiceModule, BeersListComponentModule, BeersServiceModule, CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
