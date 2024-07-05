import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChoosePlanComponent } from './pages/choose-plan/choose-plan.component';
import { UsernameComponent } from './pages/username/username.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { Component } from '@angular/core';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'choose-plan', component: ChoosePlanComponent },
  { path: 'username', component: UsernameComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];
