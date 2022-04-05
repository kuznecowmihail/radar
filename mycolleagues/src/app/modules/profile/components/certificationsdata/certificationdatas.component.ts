import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Certification } from 'src/models/certifications';

@Component({
  selector: 'app-certifications-data-component',
  templateUrl: 'certificationsdata.component.html',
  styleUrls: ['certificationsdata.component.scss'],
})
export class CertificationsDataComponent implements OnChanges {
  @Input() id?: string;
  displayedColumns: string[] = ['name', 'startdate', 'enddate'];
  dataSource: Certification[] = [];
  isDataLoaded: boolean = false;
  constructor(private httpService: HttpService) {}
  ngOnChanges(changes: SimpleChanges) {
    this.getCertifications();
  }
  getCertifications() {
    if (!this.id) {
      this.dataSource = [];
      return;
    }
    this.httpService
      .getCertifications(this.id)
      .subscribe((resp: Certification[]) => {
        console.log('Certifications:');
        console.log(resp);
        this.isDataLoaded = true;
        this.dataSource = resp;
      });
  }
}
