import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SocialLink } from 'src/app/models/social-link.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  msgErrTxt: string;

  @ViewChild('subject') subject: ElementRef;
  @ViewChild('subjectPlaceholder') subjectPlaceholder: ElementRef;
  @ViewChild('sendingMsg') sendingMsg: ElementRef;
  @ViewChild('msgErr') msgErr: ElementRef;
  @ViewChild('msgOk') msgOk: ElementRef;


  constructor(private dataService: DataService, private _fb: FormBuilder) {


    this.contactForm = this._fb.group({
      name: '',
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: '',
      otherSubject: '',
      message: '',
    });

  }

  email: string;
  phone: string;
  residence: string;
  socialLinks: SocialLink[];


  ngOnInit(): void {
    this.dataService.changeActiveLink('contact');
    this.getDeveloper();
    this.getSocialLinks();
  }

  getDeveloper() {
    this.dataService.getDeveloper().subscribe({
      next: (res: any) => {
        this.email = res.email;
        this.phone = res.phone;
        this.residence = res.residence;
      },
      error: (err: any) => console.log(err),
    });
  }

  getSocialLinks() {
    this.dataService.getSocialLinks().subscribe({
      next: (res: any) => {
        this.socialLinks = res;
      },
      error: (err: any) => console.log(err),
    });
  }

  changeSelectColor(val: string) {
    if (val != "") {
      this.subject.nativeElement.style.color = "#fff";
    }
  }

  formSubmit() {
    this.msgErr.nativeElement.style.display = 'none';
    this.msgOk.nativeElement.style.display = 'none';
    this.sendingMsg.nativeElement.style.display = 'flex';
    this.dataService.sendEmail(this.contactForm.value).subscribe({
      next: (res: any) => {
        this.contactForm.reset();
        this.subjectPlaceholder.nativeElement.selected = true;
        this.subject.nativeElement.style.color = "rgba(255, 255, 255, 0.3)";

      },
      error: (err: any) => {
        this.sendingMsg.nativeElement.style.display = 'none';
        this.msgErrTxt = err.status + ' - ' + err.statusText
        this.msgErr.nativeElement.style.display = 'flex';
      },
      complete: () => {
        this.sendingMsg.nativeElement.style.display = 'none';
        this.msgOk.nativeElement.style.display = 'flex';
      }
    });
  }

}
