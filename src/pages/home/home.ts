import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User} from "../../models/user";
import {RegisterPage} from "../register/register";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 user = {} as User;
  constructor(public navCtrl: NavController) {

  }
  login(){

  }

  register(){
  this.navCtrl.push(RegisterPage);
  }
}
