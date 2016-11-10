import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Web3client} from '../../providers/web3client';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [Web3client]
})
export class SettingsPage {
  page: string;
  hdwallet: any;
  web3c: any;
  web3: any;
  wallet: any;
  jsonRpcServers: string[];
  json_rpc_server: string;
  json_rpc_version: string;

  constructor(public navCtrl: NavController, public _web3c: Web3client) {
    this.web3c = _web3c;
    this.web3 = _web3c.getWeb3();
  }

  ionViewDidLoad() {
    this.page = 'server';
    this.jsonRpcServers = [
      "https://testnet.eth3.djuri.eu",
      "https://eth3.augur.net"
    ];

    console.log(this.web3);

    this.json_rpc_server =  "https://eth3.augur.net";
    this.web3.version.getNode((err, res) => {
      console.log(err, res);
      if (!err)
        this.json_rpc_version = res;
      else {
        this.json_rpc_version = err;
      }
    });

    // this.web3_version = this.web3.version.api;
  }

}
