import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('initial', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('clicked', style({
        transform: 'translateX(-100%)',
        opacity: 0,
      })),
      transition('initial => clicked', animate('900ms ease-out')),
    ]),
    trigger('circleAnimation', [
      state('initial', style({
        transform: 'translateY(-50%) rotate(78deg)',
        opacity: 1,
      })),
      state('clicked', style({
        transform: 'translateY(50%) rotate(78deg)',
        opacity: 0,
      })),
      transition('initial => clicked', animate('900ms ease-out')),
    ]),
    trigger('textAnimation', [
      state('initial', style({
        transform: 'translate(-50%, -50%) rotate(0.5deg)',
        opacity: 1,
      })),
      state('clicked', style({
        transform: 'translate(-50%, -50%) rotate(0.5deg)',
        opacity: 0,
      })),
      transition('initial => clicked', animate('900ms ease-out')),
    ]),
  ],
})
export class LoginComponent {
  buttonState = 'initial';

  constructor(private router: Router) { }

  redirectToHome() {
    this.buttonState = 'clicked';
    setTimeout(() => {
      this.router.navigate(['/home']);
      this.buttonState = 'initial';
    }, 400);
  }
}