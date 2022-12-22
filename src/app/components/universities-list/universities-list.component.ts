import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, Observable, switchMap} from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';


@Component({
  selector: 'app-universities-list',
  styleUrls: ['./universities-list.component.scss'],
  templateUrl: './universities-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesListComponent {


  readonly search: FormControl  = new FormControl('');


  readonly list$: Observable<UniversityModel[]> =
    this.search.valueChanges.pipe(
      debounceTime(1000),
      switchMap((search) => this._universityService.getAll(search)
  ));


  constructor(private _universityService: UniversityService) {
  }

}
