import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'routerAnimation' }},
  {path: 'about', component: AboutComponent, data: { animation: 'routerAnimation' }},
  {path: 'resume', component: ResumeComponent, data: { animation: 'routerAnimation' }},
  {path: 'portfolio', component: PortfolioComponent, data: { animation: 'routerAnimation' }},
  {path: 'contact', component: ContactComponent, data: { animation: 'routerAnimation' }},

  {path: '**', component: NotFoundComponent, data: { animation: 'routerAnimation' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
