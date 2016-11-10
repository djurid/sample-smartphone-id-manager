import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ManagePage } from '../pages/manage/manage';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    ManagePage,
    HistoryPage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ManagePage,
    HistoryPage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
