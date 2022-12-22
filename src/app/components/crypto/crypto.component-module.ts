import { NgModule } from '@angular/core';
import { CryptoComponent } from './crypto.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    NgForOf,
    AsyncPipe,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule
  ],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent]
})
export class CryptoComponentModule {
}
