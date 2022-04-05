import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usefull-links-data-component',
  templateUrl: './usefullinksdata.component.html',
  styleUrls: ['./usefullinksdata.component.scss'],
})
export class UsefullLinksDataComponent {
  @Input() id?: string;
  isDataLoaded: boolean = false;
}
