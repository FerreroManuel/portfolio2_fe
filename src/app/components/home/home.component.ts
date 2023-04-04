import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { Keyword } from 'src/app/models/keyword.model';
import { SocialLink } from 'src/app/models/social-link.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  firstName: string;
  lastName: string;
  jobTitle: string;
  keywords: Keyword[];
  cvEsp: string;
  socialLinks: SocialLink[];

  constructor(private dataService: DataService) { }

  // Typing animation properties and methods
  private typedTextSpan: any;
  private cursorSpan: any;
  private typingDelay = 200;
  private erasingDelay = 100;
  private newTextDelay = 2000;
  private textArrayIndex = 0;
  private charIndex = 0;

  private type = () => {
    if (this.typedTextSpan) {
      if (this.charIndex < this.keywords[this.textArrayIndex].title.length) {
        if (!this.cursorSpan.classList.contains("typing")) this.cursorSpan.classList.add("typing");
        this.typedTextSpan.textContent += this.keywords[this.textArrayIndex].title.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(this.type, this.typingDelay);
      } else {
        this.cursorSpan.classList.remove("typing");
        setTimeout(this.erase, this.newTextDelay)
      }
    }
  }

  private erase = () => {
    if (this.charIndex > 0) {
      if (!this.cursorSpan.classList.contains("typing")) this.cursorSpan.classList.add("typing");
      this.typedTextSpan.textContent = this.keywords[this.textArrayIndex].title.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(this.erase, this.erasingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.keywords.length) this.textArrayIndex = 0;
      setTimeout(this.type, this.typingDelay + 1000);
    }
  }; // Typing animation end



  ngOnInit(): void {
    this.getDeveloper()
    this.getKeywords();
    this.getSocialLinks();

    this.dataService.changeActiveLink('home');  // Makes Home item active on navbar

  }


  getDeveloper() {
    this.dataService.getDeveloper().subscribe({
      next: (res: any) => {
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.jobTitle = res.jobTitle;
        this.cvEsp = res.cvEsp;
      },
      error: (err: any) => console.log(err)
    });
  }

  getKeywords() {
    this.dataService.getKeywords().subscribe({
      next: (res: any) => {
        this.keywords = res;
        this.typedTextSpan = document.querySelector(".typed-text"); // ¨\
        this.cursorSpan = document.querySelector(".cursor");        //   |-- Typing effect
        this.type();                                                // _/
      },
      error: (err: any) => console.log(err)
    });
  }


  getSocialLinks() {
    this.dataService.getSocialLinks().subscribe({
      next: (res: any) => {
        this.socialLinks = res;
      },
      error: (err: any) => console.log(err)
    });
  }


}
