import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [FormsModule, MatButtonModule, BrowserAnimationsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
