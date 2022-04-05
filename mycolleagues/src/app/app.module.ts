import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from './app.routing.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ColleaguesModule } from './modules/colleagues/colleagues.module';
import { LoginModule } from './modules/login/login.module';
import { BoldDirective } from './diretives/bolddirective';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ColleaguesModule,
    ProfileModule,
    LoginModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BoldDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
