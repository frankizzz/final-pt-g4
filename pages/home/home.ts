import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
selector: 'page-home',
templateUrl: 'home.html',
styleUrls:['calculator.css']
})
export class HomePage {
sex: string;
age: number;
height: number;
weight: number;
actlev: string;
bmr: number;
cal: number;

constructor(public navCtrl: NavController) {}
calculateBMR(){
if(this.age >= 18 &&
this.sex == "m" && this.actlev == "al0"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 + 5);
this.cal = (this.bmr * 1.2);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "f" && this.actlev == "al0"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 - 161);
this.cal = (this.bmr * 1.2);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "m" && this.actlev == "al12"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 + 5);
this.cal = (this.bmr * 1.4);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "f" && this.actlev == "al12"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 - 161);
this.cal = (this.bmr * 1.4);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "m" && this.actlev == "al23"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 + 5);
this.cal = (this.bmr * 1.6);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "f" && this.actlev == "al23"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 - 161);
this.cal = (this.bmr * 1.6);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "m" && this.actlev == "al35"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 + 5);
this.cal = (this.bmr * 1.75);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "f" && this.actlev == "al35"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 - 161);
this.cal = (this.bmr * 1.75);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "m" && this.actlev == "al67"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 + 5);
this.cal = (this.bmr * 2.0);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "f" && this.actlev == "al67"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 - 161);
this.cal = (this.bmr * 2.0);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "m" && this.actlev == "alpro"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 + 5);
this.cal = (this.bmr * 2.03);
this.cal = parseFloat(this.cal.toFixed(2))
}
else if(this.age >= 18 &&
this.sex == "f" && this.actlev == "alpro"){
this.bmr = (10 * this.weight / 1 + 6.25 * this.height / 0.01 - 5 * this.age / 1 - 161);
this.cal = (this.bmr * 2.03);
this.cal = parseFloat(this.cal.toFixed(2))
}
}
}
