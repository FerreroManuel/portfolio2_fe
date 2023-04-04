import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  firstName: string;
  lastName: string;
  openToWork: boolean;
  navAct: string;
  navBar: any;
  openSpan: string = '#'

  constructor(private dataService: DataService, private _router: Router) {
    this.dataService.changeActive.subscribe((page) => {
      this.navAct = page
      if(page === 'home') {
        this.navBar = false
      } else {
        this.navBar = false 
      }
    });
  };

  ngOnInit(): void {
      this.getDeveloper();
  }


  getDeveloper() {
    this.dataService.getDeveloper().subscribe({
      next: (res: any) => {
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.openToWork = res.openToWork;
      },
      error: (err: any) => console.log(err)
    });
  }

  onOpenToWork() { 
    if (this.openSpan === '#') {
      this.openSpan = '#OPENTOWORK';
    } else if (this.openSpan === '#OPENTOWORK') {
      this.openSpan = '#';
    }
  }

  goContact() {
    this._router.navigate(['contact'])
  }

}
