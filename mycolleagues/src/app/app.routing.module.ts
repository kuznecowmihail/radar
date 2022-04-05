import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleaguesComponent } from './modules/colleagues/components/colleagues/colleagues.component';
import { LoginComponent } from './modules/login/login/login.component';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'colleagues', component: ColleaguesComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
