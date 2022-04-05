import { Component, Input } from '@angular/core';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-common-data-component',
  templateUrl: './commondata.component.html',
  styleUrls: ['./commondata.component.scss'],
})
export class CommonDataComponent {
  @Input() isDataLoaded: boolean = false;
  @Input() employee?: Employee;
}
