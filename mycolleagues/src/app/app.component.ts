import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements IContent {
  title = '';
  componentAdded(event: IContent) {
    this.title = event.title;
  }
}
