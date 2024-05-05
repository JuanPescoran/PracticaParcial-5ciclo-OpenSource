import { Component } from '@angular/core';

@Component({
  selector: 'app-navegation-bar',
  templateUrl: './navegation-bar.component.html',
  styleUrl: './navegation-bar.component.css'
})
export class NavegationBarComponent {
  options = [
    {path: '/home', title: 'Home'},
    {path: '/store/bundles', title: 'Bundles'},
  ]
}
