import { Component, Input } from '@angular/core';
import { ProjectImage } from 'src/app/models/project-image.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() projectDetails: Project;

  projectLanguages: string = '';
  feature: ProjectImage;

  constructor() {
  }

  getStatus(): string {
    let status = this.projectDetails.status
    if (status === 'CAN') return 'Cancelado'
    else if (status === 'DEV') return 'En desarrollo'
    else if (status === 'PAU') return 'Pausado'
    else if (status === 'PRO') return 'En producción'
    else return 'N/D'
  }

  getColorStatus(): string {
    let status = this.projectDetails.status
    if (status === 'CAN') return 'color: red;'
    else if (status === 'DEV') return 'color: blue;'
    else if (status === 'PAU') return 'color: gray;'
    else if (status === 'PRO') return 'color: green;'
    else return 'color: transparent;'
  }


  getLanguages() { 
    let languages: string = ''
    this.projectDetails.languages.forEach((lang) => {
      if (languages.length === 0) {
        languages += `${lang.title} `;
      } else {
        languages += `, ${lang.title}`;
      }
    });
    return languages

  }

  
}
