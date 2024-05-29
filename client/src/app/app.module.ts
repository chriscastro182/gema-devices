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
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { InfoModalComponent } from './components/user/info-modal/info-modal.component';
import { EditModalComponent } from './components/user/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/user/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserComponent,
    InfoModalComponent,
    EditModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
