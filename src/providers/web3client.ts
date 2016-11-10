import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import hdkey from 'ethereumjs-wallet/hdkey';
import bip39 from 'bip39';
import Web3 from 'web3';

import {Config, Platform} from 'ionic-angular';

@Injectable()
export class Web3client {
  data: any;
  config: Config;
  storage: Storage;
  web3: any;

  constructor(public http: Http, public _config: Config) {
    this.config = _config;
    // this.storage = new Storage(SqlStorage, {
    //   'name': 'djurid_storage'
    // });

    this.web3 = new Web3();
    this.web3.setProvider(new this.web3.providers.HttpProvider("https://eth3.augur.net"));

  }

  getWeb3() {
    return this.web3;
  }

  getWallet() {
    //return hdkey.fromMasterSeed(this.getSeed());
  }

  getSeed() {
    return 'normal embody welcome car choose mad source soap media palm bachelor senior replace illness stomach'; // bip39.generateMnemonic();
  }
}
