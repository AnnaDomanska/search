import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto',
  styleUrls: ['./crypto.component.scss'],
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {

  readonly symbol: FormControl = new FormControl('');

  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  public selectedCryptos = [''];
  constructor(private _cryptoService: CryptoService) {
  }

  selectCrypto(crypto: string): void {
    this.selectedCryptos.push(crypto);
  }
}
