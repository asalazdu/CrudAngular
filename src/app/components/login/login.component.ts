import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })), 
      transition(':enter', [
        animate('0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)') 
      ]),
      transition(':leave', [
        animate('0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)')
      ]),
    ]),
  ],
})
export class LoginComponent {  }
