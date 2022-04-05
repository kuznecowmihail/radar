import { Component } from '@angular/core';
import { IContent } from 'src/models/icontent';

@Component({
  selector: 'app-login-root',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements IContent {
  title = 'Login';
  componentAdded(event: IContent) {
    this.title = event.title;
  }
}
