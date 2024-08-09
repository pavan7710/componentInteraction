import { Component , Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model'



@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  // @Input() data : string[] = []
  @Input() data : Employee [] = []
}
