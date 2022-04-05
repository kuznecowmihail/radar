import { Component, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { IFilter } from 'src/models/ifilter';

@Component({
  selector: 'app-filter-group-component',
  templateUrl: 'filtergroup.component.html',
  styleUrls: ['filtergroup.component.scss'],
})
export class FilterGroupComponent {
  unitTypes: string[] = [];
  levels: string[] = [];
  selectedUnitType?: string;
  selectedLevel?: string;
  @Output() onChanged = new EventEmitter<IFilter>();
  onFilterChanged() {
    this.onChanged.emit({
      unitType: this.selectedUnitType,
      level: this.selectedLevel,
    });
  }
  constructor(private httpService: HttpService) {
    this.httpService.getLookup('/api/unittypes').subscribe((resp: string[]) => {
      console.log(`Unit types: ${resp}`);
      this.unitTypes = resp;
      this.onFilterChanged();
    });
    this.httpService.getLookup('/api/levels').subscribe((resp: any) => {
      console.log(`Levels: ${resp}`);
      this.levels = resp;
      this.onFilterChanged();
    });
  }
}
