import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/models/employee';
import { IContent } from 'src/models/icontent';
import { ColleagueComponent } from 'src/app/modules/colleagues/components/colleague/colleague.component';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements IContent, OnInit {
  title = 'Profile';
  employee?: Employee;
  isDataLoaded: boolean = false;
  constructor(
    private httpService: HttpService,
    public dialogRef?: MatDialogRef<ColleagueComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Employee
  ) {
    if (data && Object.keys(data).length !== 0) {
      this.isDataLoaded = true;
      this.employee = data;
      return;
    }
    this.employee = undefined;
  }
  ngOnInit(): void {
    if (!this.employee || Object.keys(this.employee).length === 0) {
      this.getProfile();
    }
  }
  async getProfile() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    console.log(clientPrincipal);
    if (!clientPrincipal) {
      return;
    }
    const userId = 'C42FFC96-6F9D-41A5-8AFE-93380C4FE862'; //clientPrincipal.userId;
    this.httpService
      .getProfile('C42FFC96-6F9D-41A5-8AFE-93380C4FE862')
      .subscribe((resp: Employee[]) => {
        console.log('Employyes:');
        console.log(resp);
        this.isDataLoaded = true;
        if (resp.length) {
          this.employee = resp[0];
        }
      });
  }
}
