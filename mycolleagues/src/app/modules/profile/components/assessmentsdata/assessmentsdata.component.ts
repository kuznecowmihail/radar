import { Component, Input } from '@angular/core';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-assessments-data-component',
  templateUrl: './assessmentsdata.component.html',
  styleUrls: ['./assessmentsdata.component.scss'],
})
export class AssessmentsDataComponent {
  @Input() employee?: Employee;
}
