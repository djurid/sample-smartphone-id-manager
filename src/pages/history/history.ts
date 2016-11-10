import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historyItems } from '../../mocks/history';

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  items: any[];
  searchQuery: string;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.items = historyItems;
    this.searchQuery = '';
  }

  getItems(e: any) {

  }

}
