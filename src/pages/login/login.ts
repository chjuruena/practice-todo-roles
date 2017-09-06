import { Component } from '@angular/core';
import {  NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';

import { HomePage } from '../home/home';
import { Signup } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: string;
  password: string;
  loading: any;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });
  }

  login(){
    // Your app login API web service call triggers 
    // this.navCtrl.push(TabsPage, {}, {animate: false});
    this.showLoader();
 
        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });
  }
   launchSignup(){
        this.navCtrl.push(Signup);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }



}
