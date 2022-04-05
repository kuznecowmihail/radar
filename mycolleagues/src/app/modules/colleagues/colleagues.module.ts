import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleaguesComponent } from './components/colleagues/colleagues.component';
import { SelectFilterComponent } from './components/selectfilter/selectfilter.component';
import { FilterGroupComponent } from './components/filtergroup/filtergroup.component';
import { HttpService } from 'src/app/http.service';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ColleaguesComponent,
    ColleagueComponent,
    FilterGroupComponent,
    SelectFilterComponent,
  ],
  exports: [
    ColleaguesComponent,
    ColleagueComponent,
    FilterGroupComponent,
    SelectFilterComponent,
  ],
  providers: [HttpService],
})
export class ColleaguesModule {}
