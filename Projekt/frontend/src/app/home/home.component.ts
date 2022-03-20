import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */

  breakpoint: number = 0;

  constructor() {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth >= 844) ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = (window.innerWidth >= 844) ? 1 : 2;
  }
}
