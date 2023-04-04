import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.changeActiveLink('404');
  }

}