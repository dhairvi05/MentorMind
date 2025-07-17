import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { DashboardLayout } from './dashboard-layout/dashboard-layout';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardLayout, 
    children: [
      { path: '', component: Dashboard }
    ]
  },
  { path: 'contact', component: ContactUs},
  { path: 'about', component: About},
  { path: 'home', component: Homepage},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
