import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TempService } from './temp.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'BitCoin$';

  constructor(
    public bitcoinService: BitcoinService,
    public tempService: TempService
  ) {}

  ngOnInit() {
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  autoSaveInterval: number = setInterval(() => this.update(), 60000);

  update() {
    this.bitcoinService.update();
  }
}
