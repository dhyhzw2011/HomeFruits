import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
  items = [
    { title: "基本信息维护"},
    { title: "登录密码修改"},
    { title: "我的收货地址"}
  ];

  constructor(public navCtrl: NavController) {

  }

  itemClick(item) {
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
  }

}
