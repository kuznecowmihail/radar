import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Project } from 'src/models/project';

@Component({
  selector: 'app-projects-data-component',
  templateUrl: './projectsdata.component.html',
  styleUrls: ['./projectsdata.component.scss'],
})
export class ProjectsDataComponent implements OnChanges {
  @Input() id?: string;
  displayedColumns: string[] = ['name', 'startdate', 'enddate'];
  dataSource: Project[] = [];
  isDataLoaded: boolean = false;
  constructor(private httpService: HttpService) {}
  ngOnChanges(changes: SimpleChanges) {
    this.getProjects();
  }
  getProjects() {
    if (!this.id) {
      this.dataSource = [];
      return;
    }
    this.httpService.getProjects(this.id).subscribe((resp: Project[]) => {
      console.log('Projects:');
      console.log(resp);
      this.isDataLoaded = true;
      this.dataSource = resp;
    });
  }
}
