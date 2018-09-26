import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';


declare var Connection;


@Injectable()
export class Connectivity {

  onDevice: boolean;
  
 
  constructor(public platform: Platform,
              public network: Network) {
    this.onDevice = this.platform.is('cordova');   
      }

  isOnline(): boolean {
    console.log('online'); 
    if(this.onDevice &&  this.network.type){
      return this.network.type !== Connection.NONE;
    }else{
      return navigator.onLine;
      
    }
  }

  isOffline(): boolean {
    console.log('offline')
    if(this.onDevice && this.network.type){
      return this.network.type === Connection.NONE;
    }else{
      return !navigator.onLine;
      
    }
  
  }


}
