import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ManagePage } from '../manage/manage';
import { HistoryPage } from '../history/history';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ManagePage;
  tab3Root: any = HistoryPage;
  tab4Root: any = SettingsPage;

  constructor() {

  }
}
