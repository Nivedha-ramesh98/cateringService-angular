import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { UserGroupsComponent } from './admin/user-groups/user-groups.component';
import { LoginComponent } from './master/login/login.component';
import { LogoutComponent } from './master/logout/logout.component';
import { HomeComponent } from './master/home/home.component';
import { HeaderComponent } from './master/header/header.component';
import { AboutComponent } from './master/about/about.component';
import { MenuComponent } from './master/menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserRolesComponent,
    UserGroupsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
