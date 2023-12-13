import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  playAnimation = false;

  signIn() {
    // logica para iniciar sesion
    this.playAnimation = true;
  }

}
