import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AssessmentsDataComponent } from './components/assessmentsdata/assessmentsdata.component';

import { ProfileComponent } from './components/profile/profile.component';
import { CommonDataComponent } from './components/commondata/commondata.component';
import { AssestsDataComponent } from './components/assestsdata/assestsdata.component';
import { CertificationsDataComponent } from './components/certificationsdata/certificationdatas.component';
import { ProjectsDataComponent } from './components/projectsdata/projectsdata.component';
import { UsefullLinksDataComponent } from './components/usefulllinksdata/usefullinksdata.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HttpService } from 'src/app/http.service';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    ProfileComponent,
    CommonDataComponent,
    ProjectsDataComponent,
    AssessmentsDataComponent,
    AssestsDataComponent,
    CertificationsDataComponent,
    UsefullLinksDataComponent,
  ],
  exports: [
    ProfileComponent,
    CommonDataComponent,
    ProjectsDataComponent,
    AssessmentsDataComponent,
    AssestsDataComponent,
    CertificationsDataComponent,
    UsefullLinksDataComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
    HttpService,
  ],
})
export class ProfileModule {}
