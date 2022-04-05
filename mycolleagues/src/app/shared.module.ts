import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [],
  exports: [],
})
export class SharedModule {}
