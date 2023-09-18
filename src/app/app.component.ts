import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faSquareFacebook,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const devices = {
  SMALL_DEVICES: 'mobile',
  LARGER_DEVICES: 'desktop',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  device: string = '';

  fg: FormGroup;

  // font icons
  faInstagram = faInstagram;
  faSquareFacebook = faSquareFacebook;
  faXTwitter = faXTwitter;
  faEnvelope = faEnvelope;
  faPhoneVolume = faPhoneVolume;

  constructor() {
    this.fg = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    let screenWidth = window.innerWidth;
    this.device =
      screenWidth >= 600 ? devices.LARGER_DEVICES : devices.SMALL_DEVICES;
  }

  get email() {
    return this.fg.get('email');
  }
}
