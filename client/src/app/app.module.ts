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
import { AdminLayoutComponent } from './components/templates/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/templates/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing';
import { UserComponent } from './components/user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
