import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {PlanterComponent} from "./components/planter/planter.component";
import {RegistrationSucceededComponent} from "./components/register/registration-succeeded/registration-succeeded.component";
import {AuthguardGuard} from "./guards/authguard.guard";
import {CardComponent} from "./components/card/card.component";

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
    component: PlanterComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'yourPlants',
    component: CardComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'registration',
    component: RegistrationSucceededComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
