import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR'

import { IconModule } from '@visurel/iconify-angular';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataService } from './services/data.service';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnglishComponent } from './components/english/english.component';


registerLocaleData(localeEs, 'es-AR')


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    NotFoundComponent,
    ProjectDetailsComponent,
    EnglishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'},
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
