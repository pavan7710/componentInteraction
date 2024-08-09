import { Component , Output , EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() dataEmitter = new EventEmitter <Employee> ()

  firstname : string = ""
  lastname : string = ""
  sendDataToParent(){
    const data  : Employee = {
      firstName :  this.firstname ,
      lastName : this.lastname
    }
    this.dataEmitter.emit( data )
  }
}