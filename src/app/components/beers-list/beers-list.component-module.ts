import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { BeersListComponent } from './beers-list.component';

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    CommonModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  declarations: [BeersListComponent],
  providers: [],
  exports: [BeersListComponent]
})
export class BeersListComponentModule {
}
