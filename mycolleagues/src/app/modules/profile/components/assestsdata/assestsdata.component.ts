import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assests-data-component',
  templateUrl: './assestsdata.component.html',
  styleUrls: ['./assestsdata.component.scss'],
})
export class AssestsDataComponent {
  @Input() id?: string;
  isDataLoaded: boolean = false;
}
