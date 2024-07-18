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
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((c) => c.SignupComponent),
  },
  {
    path: 'choose-plan',
    loadComponent: () =>
      import('./pages/choose-plan/choose-plan.component').then(
        (c) => c.ChoosePlanComponent
      ),
  },
  {
    path: 'username',
    loadComponent: () =>
      import('./pages/username/username.component').then(
        (c) => c.UsernameComponent
      ),
  },
  {
    path: 'movie-list',
    loadComponent: () =>
      import('./pages/movie-list/movie-list.component').then(
        (c) => c.MovieListComponent
      ),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-detail/movie-detail.component').then(
        (c) => c.MovieDetailComponent
      ),
  },
];
