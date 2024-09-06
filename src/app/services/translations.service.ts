import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

const supportedLangs: Array<string> = ['en', 'es'];
const supportedRegEx = new RegExp(supportedLangs.join('|'));

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    // Setting english as default language
    translate.setDefaultLang(supportedLangs[0]);

    // Getting user language
    const userLang =
      sessionStorage.getItem('language') || translate.getBrowserLang();

    // Setting up tranlate service
    translate.use(
      userLang?.match(supportedRegEx) ? userLang : translate.defaultLang
    );
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    sessionStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }

  getOppositeLanguage(): string {
    const currentLang = this.getCurrentLanguage();
    return supportedLangs.find((lang) => lang !== currentLang) ?? 'en';
  }
}
