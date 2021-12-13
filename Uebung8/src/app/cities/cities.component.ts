import { Component, OnInit } from '@angular/core';
import {Data} from "../shared/data";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  staedte: Data[];

  constructor(private ds: DataService) {
    this.staedte = this.ds.getAll();
  }

  ngOnInit(): void {
  }

}
