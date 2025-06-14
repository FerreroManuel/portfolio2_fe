import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Developer } from '../models/developer.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { ExternalLink } from '../models/external-link.model';
import { Framework } from '../models/framework.model';
import { Keyword } from '../models/keyword.model';
import { Language } from '../models/language.model';
import { ProjectCategory } from '../models/project-category.model';
import { ProjectImage } from '../models/project-image.model';
import { ProjectLanguage } from '../models/project-language.model';
import { Project } from '../models/project.model';
import { Repository } from '../models/repository.model';
import { Skill } from '../models/skill.model';
import { SocialLink } from '../models/social-link.model';
import { Contact } from '../models/contact.model';


const hostname = window.location.hostname

let domain: string;

if (hostname == 'localhost') {
  domain = 'http://localhost:8000';
} else {
  domain = "https://api.manuelferrero.com.ar";
}

const format = '?format=json'


// Backends URLs
const urlContact = domain + '/contact';
const urlDeveloper = domain + '/developer/1' + format;
const urlEducation = domain + '/education' + format;
const urlExperience = domain + '/experience' + format;
const urlExternalLinks = domain + '/external_link' + format;
const urlFrameworks = domain + '/framework' + format;
const urlKeywords = domain + '/title' + format;
const urlLanguages = domain + '/language' + format;
const urlProjectCategories = domain + '/project_category' + format;
const urlProjectImages = domain + '/project_image' + format;
const urlProjectLanguages = domain + '/project_language' + format;
const urlProjects = domain + '/project' + format;
const urlRepositorys = domain + '/repository' + format;
const urlSkills = domain + '/skill' + format;
const urlSocialLinks = domain + '/social_link' + format;



@Injectable({
  providedIn: 'root'
})
export class DataService {

  changeActive = new EventEmitter<string>();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private _http: HttpClient) { }


  changeActiveLink(page: string) {  // Cambia el link activo en el navbar
    this.changeActive.emit(page);
  }

  getDeveloper(): Observable<Developer[]> {
    return this._http.get<Developer[]>(urlDeveloper, { headers: this.headers })
  }

  getEducation(): Observable<Education[]> {
    return this._http.get<Education[]>(urlEducation, { headers: this.headers })
  }

  getExperience(): Observable<Experience[]> {
    return this._http.get<Experience[]>(urlExperience, { headers: this.headers })
  }

  getExternalLinks(): Observable<ExternalLink[]> {
    return this._http.get<ExternalLink[]>(urlExternalLinks, { headers: this.headers })
  }

  getFrameworks(): Observable<Framework[]> {
    return this._http.get<Framework[]>(urlFrameworks, { headers: this.headers })
  }

  getKeywords(): Observable<Keyword[]> {
    return this._http.get<Keyword[]>(urlKeywords, { headers: this.headers })
  }

  getLanguages(): Observable<Language[]> {
    return this._http.get<Language[]>(urlLanguages, { headers: this.headers })
  }

  getProjectCategories(): Observable<ProjectCategory[]> {
    return this._http.get<ProjectCategory[]>(urlProjectCategories, { headers: this.headers })
  }

  getProjectImages(): Observable<ProjectImage[]> {
    return this._http.get<ProjectImage[]>(urlProjectImages, { headers: this.headers })
  }

  getProjectLanguages(): Observable<ProjectLanguage[]> {
    return this._http.get<ProjectLanguage[]>(urlProjectLanguages, { headers: this.headers })
  }

  getProjects(filter: string = '*'): Observable<Project[]> {
    if (filter === '*') {
      return this._http.get<Project[]>(urlProjects, { headers: this.headers })
    } else {
      return this._http.get<Project[]>(domain + '/project' + '/' + filter  + format, { headers: this.headers })
    }
  }

  getRepositories(): Observable<Repository[]> {
    return this._http.get<Repository[]>(urlRepositorys, { headers: this.headers })
  }

  getSkills(): Observable<Skill[]> {
    return this._http.get<Skill[]>(urlSkills, { headers: this.headers })
  }

  getSocialLinks(): Observable<SocialLink[]> {
    return this._http.get<SocialLink[]>(urlSocialLinks, { headers: this.headers })
  }

  sendEmail(contactForm: Contact): Observable<any> { 
    return this._http.post(urlContact, JSON.stringify(contactForm), { headers: this.headers })
  }

}
