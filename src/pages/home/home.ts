import { Component } from '@angular/core';

import { NavController, ActionSheet } from 'ionic-angular';
import {Web3client} from '../../providers/web3client';

import { nearbyItems } from '../../mocks/nearby';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Web3client]
})
export class HomePage {
  items: any[];
  address: string;
  balance: number;
  web3c: any;
  web3: any;

  constructor(public navCtrl: NavController, public _web3c: Web3client) {
    this.web3c = _web3c;
    this.web3 = _web3c.getWeb3();
    this.address = '0xdE8398C292d88496830AD4AD1847f0a128796498';

    if (this.web3) {
      this.balance = parseFloat(this.web3.fromWei(this.web3.eth.getBalance(this.address)));
    }
  }

  ionViewDidLoad() {
    this.items = nearbyItems;
  }

}
