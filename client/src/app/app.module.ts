import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { SmartHomeComponent } from './components/dashboard/smart-home/smart-home.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SmartHomeComponent,
    UserIndexComponent,
    ProfileComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
