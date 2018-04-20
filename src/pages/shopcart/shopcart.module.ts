import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCartPage } from './shopcart';

@NgModule({
    declarations: [
        ShopCartPage,
    ],
    imports: [
        IonicPageModule.forChild(ShopCartPage),
    ],
})
export class ShopCartPageModule { }
