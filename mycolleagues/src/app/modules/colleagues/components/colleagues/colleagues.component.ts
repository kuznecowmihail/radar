import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { IContent } from 'src/models/icontent';
import { IFilter } from 'src/models/ifilter';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-collegues-component',
  templateUrl: 'colleagues.component.html',
  styleUrls: ['colleagues.component.scss'],
})
export class ColleaguesComponent implements IContent {
  title = 'My Collegues';
  employees?: Employee[];
  copyEmployees?: Employee[];
  unitType?: string;
  isDataLoading: boolean = false;
  constructor(private httpService: HttpService) {
    this.httpService.getColleagues().subscribe((response: Employee[]) => {
      console.log('Colleagues:');
      console.log(response);
      this.employees = response;
      this.copyEmployees = response;
      this.isDataLoading = true;
      this.filterColleagues();
    });
  }
  filterColleagues(filter?: IFilter) {
    if (!filter) {
      this.employees = [...(this.copyEmployees ?? [])];
      return;
    }
    this.employees = [...(this.copyEmployees ?? [])];
    if (filter.level) {
      this.employees = [...(this.copyEmployees ?? [])].filter(
        (item) => item.level === filter.level
      );
    }
    if (filter.unitType) {
      this.employees = [...(this.employees ?? [])].filter(
        (item) => item.unittype === filter.unitType
      );
    }
  }
}
