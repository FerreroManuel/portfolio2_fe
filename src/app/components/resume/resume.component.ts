import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/models/developer.model';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  developer: Developer;
  education: Education[];
  experience: Experience[];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.changeActiveLink('resume');

    this.getDeveloper();
    this.getEducation();
    this.getExperience();
  }

  getDeveloper() {
    this.dataService.getDeveloper().subscribe({
      next: (res: any) => {
        this.developer = res;
      },
      error: (err: any) => console.log(err)
    });
  }

  getEducation() { 
    this.dataService.getEducation().subscribe({
      next: (res: any) => {
        this.education = res;
      },
      error: (err: any) => console.log(err)
    });
  };
  
  getExperience() { 
    this.dataService.getExperience().subscribe({
      next: (res: any) => {
        this.experience = res
      },
      error: (err: any) => console.log(err)
    });
  };


  repoLink(id: number) { }

}
