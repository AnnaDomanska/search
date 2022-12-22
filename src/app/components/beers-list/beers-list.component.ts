import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {debounceTime, Observable, of, startWith, switchMap} from "rxjs";
import {BeerModel} from "../../models/beer.model";
import {BeersService} from "../../services/beers.service";

@Component({
  selector: 'app-beers-list',
  styleUrls: ['./beers-list.component.scss'],
  templateUrl: './beers-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersListComponent {
  readonly pagination: FormGroup = new FormGroup({ page: new FormControl(1), perPage: new FormControl(5) });

  readonly pageOptions$: Observable<number[]> = of([1, 2, 3, 4, 5]);
  readonly perPageOptions$: Observable<number[]> = of([5, 10, 20]);

  readonly beers$: Observable<BeerModel[]> =
    this.pagination.valueChanges.pipe(
      startWith({page: 1, perPage: 5}),
      debounceTime(1000),
      switchMap((pagination) => this._beersService.getAll(pagination.page, pagination.perPage))
    );

  constructor(private _beersService: BeersService){
  }

}
