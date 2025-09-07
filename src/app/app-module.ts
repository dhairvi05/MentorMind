import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { Steps } from './steps/steps';
import { Footer } from './footer/footer';
import { Homepage } from './homepage/homepage';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { DashboardNav } from './dashboard-nav/dashboard-nav';
import { Dashboard } from './dashboard/dashboard';
import { DashboardLayout } from './dashboard-layout/dashboard-layout';
import { UploadResume } from './upload-resume/upload-resume';
import { PopupService } from './popup-service/popup-service';
import { ResumeFeedback } from './resume-feedback/resume-feedback';
import { BuildResume } from './build-resume/build-resume';
import { PersonalDetails } from './personal-details/personal-details';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    Features,
    Steps,
    Footer,
    Homepage,
    Signup,
    Login,
    About,
    ContactUs,
    DashboardNav,
    Dashboard ,
    DashboardLayout,
    UploadResume,
    PopupService,
    ResumeFeedback,
    BuildResume,
    PersonalDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
