import { Component } from '@angular/core';

import { PersonalPage } from '../personal/personal';
import { ShopCartPage } from '../shopcart/shopcart';
import { HomePage } from '../home/home';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ShopCartPage';
  tab3Root = 'PersonalPage';

  constructor() {

  }
}
