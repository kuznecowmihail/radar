import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/modules/profile/components/profile/profile.component';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {
  constructor(public dialog: MatDialog) {}
  @Input() employee?: Employee;
  openCard() {
    this.dialog.open(ProfileComponent, {
      data: this.employee,
    });
  }
}
