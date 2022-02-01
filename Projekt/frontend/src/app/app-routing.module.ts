import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {PlanterComponent} from "./planter/planter.component";
import {InfoComponent} from "./info/info.component";
import {DetailedComponent} from "./detailed/detailed.component";

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'yourPlants/:id/plan',
    component: PlanterComponent
  },
  {
    path: 'yourPlants',
    component: DetailedComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
