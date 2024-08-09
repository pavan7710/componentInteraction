import { Component } from '@angular/core';
import {  Employee } from './models/employee.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentInteration';
  data : Employee[] = [ 
    {firstName : "pavan" , id : 1 , lastName : "bollineni"},
  ]
  handleData(  data : Employee ){
    console.log(data)
    this.data.push(data)
  }
}
