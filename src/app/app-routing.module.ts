import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './admin/employee/employee.component';
import { UserGroupsComponent } from './admin/user-groups/user-groups.component';
import { AboutComponent } from './master/about/about.component';
import { HeaderComponent } from './master/header/header.component';
import { HomeComponent } from './master/home/home.component';
import { LoginComponent } from './master/login/login.component';
import { MenuComponent } from './master/menu/menu.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: HeaderComponent },
  { path : 'usergroup', component : UserGroupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
