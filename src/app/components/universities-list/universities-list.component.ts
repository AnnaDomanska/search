import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {combineLatest, debounceTime, Observable, Subject, switchMap} from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-universities-list',
  styleUrls: ['./universities-list.component.scss'],
  templateUrl: './universities-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesListComponent {


  readonly search: FormGroup = new FormGroup({ country: new FormControl() });

  readonly country$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.country),
    debounceTime(1000)
  );

  readonly list$: Observable<UniversityModel[]> = combineLatest([
  this._activatedRoute.params,
    this.country$,
  ]).pipe(
    switchMap(([params, country]) => this._universityService.getAll(country))
  );

  constructor(private _universityService: UniversityService, private _activatedRoute: ActivatedRoute) {
  }

}
