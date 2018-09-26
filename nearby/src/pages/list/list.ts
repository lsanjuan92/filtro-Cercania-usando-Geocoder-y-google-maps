import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../providers/locations/locations';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public locations: Locations) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
