import { HttpProvider, AppGlobal } from '../../providers/http/http';
import { Component } from '@angular/core';
import { NavController, IonicPage, List } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner1: boolean = false;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }

  @ViewChild(Slides) slds: Slides;

  // 初始化slides  
  initSlides() {
    this.slides = [
      { PictUrl: 'assets/imgs/logo1.jpg', Title: '图片1' },
      { PictUrl: 'assets/imgs/logo1.jpg', Title: '图片2' },
      { PictUrl: 'assets/imgs/logo1.jpg', Title: '图片3' }
    ];
  }

  // 初始化categories 
  initCategories() {
    this.categories = [
      { Icon: 'assets/imgs/nav1.png', FavoritesTitle: '图片1' },
      { Icon: 'assets/imgs/nav2.png', FavoritesTitle: '图片2' },
      { Icon: 'assets/imgs/nav3.png', FavoritesTitle: '图片3' },
      { Icon: 'assets/imgs/nav4.png', FavoritesTitle: '图片4' }
    ];
  }

  // 初始化categories 
  initProducts() {
    this.products = [
      { Icon: 'assets/imgs/nav1.png', FavoritesTitle: '图片1' },
      { Icon: 'assets/imgs/nav2.png', FavoritesTitle: '图片2' },
      { Icon: 'assets/imgs/nav3.png', FavoritesTitle: '图片3' },
      { Icon: 'assets/imgs/nav4.png', FavoritesTitle: '图片4' }
    ];
  }

  constructor(public httpProvider: HttpProvider, public navCtrl: NavController) {
    this.initSlides();  //测试
    this.initCategories();
    //this.getSlides(); //生产采用服务端获取
    //this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.httpProvider.httpGet(AppGlobal.API.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      this.spinner1 = false;
    })
  }
  //获取分类
  getCategories() {
    this.httpProvider.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      this.categories = rs.data;
    })
  }
  //获取首页推荐列表
  getProducts() {
    this.httpProvider.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    })
  }
  //商品详情
  goDetails(item) {
    this.navCtrl.push("DetailsPage");
  }
  //解决切换其他页面回去轮播图不动问题
  ionViewWillEnter() {
    this.slds.startAutoplay();
  }
  ionViewWillLeave() {
    this.slds.stopAutoplay();
  }
  ionViewDidEnter() {
    //修复轮播手动滑动后不能自动轮播问题
    this.slds.autoplayDisableOnInteraction = false;
    //console.log(this.slides)
  }

}