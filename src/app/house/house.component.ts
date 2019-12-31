import { Component, OnInit } from '@angular/core';
import { House, Type, Car } from '../house';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  
  car: Car = new Car();
  carList: Car[] = [];
  productionList: Car[] = [];
  isCarVisisble: boolean = false;
  constructor() { }

  ngOnInit() {
    

  }

  addCar() {
    const newCar = new Car();
    newCar.company = this.car.company;
    newCar.model= this.car.model;
    newCar.seater=this.car.seater;
    newCar.color=this.car.color;
    newCar.type=this.car.type;
    this.carList.push(newCar);
    console.log(this.carList);
  }

  showCar()
  {
    this.isCarVisisble = true;
  }

  moveFromFrist()
  {
    const popedResult = this.carList.shift();
    this.productionList.push(popedResult);
  }

 moveToProduction(index: number)
{
      this.productionList.push(this.carList[index]);
      this.carList.splice(index,1);
}

moveToCarList(itemindex: number)
{
   this.carList.push(this.productionList[itemindex]);
      this.productionList.splice(itemindex,1);

}

}
