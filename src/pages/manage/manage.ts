import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { providers } from '../../mocks/providers';
import { attributes } from '../../mocks/attributes';

@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage {
  type: string;
  providers: any;
  attributes: any;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.type = 'attributes';
    this.providers = providers;
    this.attributes = attributes;
  }

  loadAbiPage(_abi) {
  }
}
