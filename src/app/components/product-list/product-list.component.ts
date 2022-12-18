import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, Observable, combineLatest, debounce, debounceTime} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  readonly search: FormGroup = new FormGroup({ title: new FormControl() });

  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.title),
    debounceTime(1000)
  );

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.startsWith$,
  ]).pipe(
    map(([products, startsWith]) => {
      if (!startsWith) {
      return [];
    }
      return products.filter(product => product.title.startsWith(startsWith))
    })
  );

  // private _startsWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public startsWith$: Observable<string> = this._startsWithSubject.asObservable();
  //
  // readonly list$: Observable<ProductModel[]> = combineLatest([
  //   this._productService.getAll(),
  //   this.startsWith$,
  // ]).pipe(
  //   map(([products, startsWith]) =>
  //     products.filter(product => product.title.startsWith(startsWith)))
  // );


  constructor(private _productService: ProductService) {
  }
  //
  // onSearchSubmitted(search: FormGroup): void {
  //   this._startsWithSubject.next(search.get('title')?.value)
  // }

  onSearchSubmitted(search: FormGroup): void {
  }
}
