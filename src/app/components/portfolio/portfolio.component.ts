import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  filter: string = '*';
  
  projects: Project[];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.changeActiveLink('portfolio');

    this.getProjects(this.filter)
  }


  getProjects(filter: string) {
    this.dataService.getProjects(filter).subscribe({
      next: (res: any) => {
        this.projects = res;
      },
      error: (err: any) => console.log(err)
    });
  }


  filterProjects(filter: string) {
    console.log('FILTER: ' + filter)
    this.getProjects(filter);
    
    // Quitar la clase filter-active de todos los filtros
    document.getElementById('*')?.classList.remove('filter-active')
    document.getElementById('can')?.classList.remove('filter-active')
    document.getElementById('dev')?.classList.remove('filter-active')
    document.getElementById('pau')?.classList.remove('filter-active')
    document.getElementById('pro')?.classList.remove('filter-active')
    
    // Agregar la clase filter-active al filtro seleccionado
    document.getElementById(filter)?.classList.add('filter-active');
  }


}