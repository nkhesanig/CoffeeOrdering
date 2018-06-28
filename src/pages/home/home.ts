import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name;
quantity: number;
submitted : boolean = false;


  constructor(public navCtrl: NavController) {

    this.quantity = 0;

  }

  order(){
    
    this.submitted = true;
  }

  click(num :number){
if(num == 1)
this.quantity = this.quantity +1

  }

  onclick(num :number){
    if(num == 2)
    this.quantity = this.quantity -2
    
      }

      rclick(){
        this.quantity = 0
      }

      
}
