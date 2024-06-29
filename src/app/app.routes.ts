import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChoosePlanComponent } from './pages/choose-plan/choose-plan.component';
import { UsernameComponent } from './pages/username/username.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'choose-plan', component: ChoosePlanComponent },
  { path: 'username', component: UsernameComponent },
];
