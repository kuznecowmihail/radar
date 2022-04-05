import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements IContent {
  title = '';
  componentAdded(event: IContent) {
    this.title = event.title;
  }
}
