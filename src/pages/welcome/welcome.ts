import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  constructor(public navCtrl: NavController) {
  }

  login(){
  this.navCtrl.push(Login);
  }

  signup(){
  this.navCtrl.push(Signup);
  }
}