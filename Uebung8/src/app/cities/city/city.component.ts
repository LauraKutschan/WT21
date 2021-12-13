import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/shared/data';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  id: number = 0;
  stadt!: Data;

  constructor(
    private route: ActivatedRoute,
    private ds: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.stadt = this.ds.getOne(this.id);
  }

}
