import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver) {}

  slides = [
    {'image': '../../assets/imagesProjekt/plant2.jpg'},
    {'image': '../../assets/imagesProjekt/plant3.jpg'},
    {'image': '../../assets/imagesProjekt/plant4.jpg'},
    {'image': '../../assets/imagesProjekt/plant.jpg'},
    {'image': '../../assets/imagesProjekt/sunflower.jpg'}
  ];

}
