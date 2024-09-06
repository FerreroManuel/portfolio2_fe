// Angular imports
import { Component, OnInit } from '@angular/core';

// Third-part imports
import Iconify from '@iconify/iconify';

// Services imports
import { DataService } from 'src/app/services/data.service';

// Models imports
import { Framework } from 'src/app/models/framework.model';
import { Language } from 'src/app/models/language.model';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private iconify = Iconify; // Iconify initialitation

  aboutPhoto: string;
  aboutText: string;
  frameworks: Framework[];
  languages: Language[];
  skills: Skill[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.changeActiveLink('about');

    this.getInfo();
  }

  getDeveloper() {
    this.dataService.getDeveloper().subscribe({
      next: (res: any) => {
        this.aboutText = res.about;
        this.aboutPhoto = res.photo;
      },
      error: (err: any) => console.log(err),
    });
  }

  getFrameworks() {
    this.dataService.getFrameworks().subscribe({
      next: (res: any) => {
        this.frameworks = res;
      },
      error: (err: any) => console.log(err),
    });
  }

  getLanguages() {
    this.dataService.getLanguages().subscribe({
      next: (res: any) => {
        this.languages = res;
      },
      error: (err: any) => console.log(err),
    });
  }

  getSkills() {
    this.dataService.getSkills().subscribe({
      next: (res: any) => {
        this.skills = res;
      },
      error: (err: any) => console.log(err),
    });
  }

  hasFramework(skillID: number) {
    if (!this.frameworks) return false;
    for (let f of this.frameworks) {
      if (f.skill.id == skillID) {
        return true;
      }
    }
    return false;
  }

  getInfo() {
    this.getFrameworks();
    this.getDeveloper();
    this.getLanguages();
    this.getSkills();
  }
}
