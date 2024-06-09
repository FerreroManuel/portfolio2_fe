import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { DataService } from './services/data.service';

import { fadeAnimation } from './app.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
    
  constructor(private dataService: DataService, private translate: TranslateService) {
    // Setting english as default language
    translate.setDefaultLang('en');

    // Getting browser language
    const browserLang = translate.getBrowserLang();

    const supportedLangs = /es|en/;

    translate.use(browserLang?.match(supportedLangs) ? browserLang : 'en');
  }

  ngOnInit(): void {

  }

  prepareRoute(outlet: RouterOutlet) { 
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
