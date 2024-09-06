import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataService } from './services/data.service';
import { TranslationService } from './services/translations.service';

import { fadeAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
