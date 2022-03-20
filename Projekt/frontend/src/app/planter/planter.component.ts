import { Component, OnInit } from '@angular/core';
import {Plan} from "../shared/plan";
import {BackendService} from "../shared/backend.service";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../shared/card";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "./edit-dialog/edit-dialog.component";

@Component({
  selector: 'app-planter',
  templateUrl: './planter.component.html',
  styleUrls: ['./planter.component.css']
})
export class PlanterComponent implements OnInit {
  plans!: Plan[];
  plan!: Plan;
  selected: any;

  idCard: string = '';
  plantCard: string = '';

  constructor( private route: ActivatedRoute,
               private bs: BackendService,
               public dialog: MatDialog) {}

  ngOnInit(): void {
    this.idCard = this.route.snapshot.paramMap.get('id') || '';
    console.log('Ausgabe der clickedCard: ' + this.idCard);

    this.readClickedPlant(this.idCard);
    console.log('Ausgabe der clickedCard: ' + this.idCard + ', ' + this.plantCard);
    this.readAllToPlant();
  }

  readAllToPlant(): void {
    this.bs.getAllPlansToPlant(this.idCard).subscribe(
      (
        response: Plan[]) => {
        this.plans = response;
        console.log(this.plans);
        return this.plans;
      },
      error => console.log(error)
    );
  }

  delete(id: string): void {
    console.log("id :" ,id );
  }

  readOne(id: string): void {
    this.bs.getOnePlan(id).subscribe(
      (response: Plan) => {
        this.plan = response;
        console.log(this.plans);
        return this.plans;
      },
      error => console.log(error)
    );
  }

  readClickedPlant (id: string) {
    this.bs.getOneCard(id).subscribe(
      (response: Card) => {
        this.plantCard = response.plant;
        return this.plantCard;
      },
      error => console.log(error)
    );
  }

  openEditDialog () {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: {'idCard': this.idCard, 'plantCard': this.plantCard},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result != null) {
        this.plantCard = result;
      }
    });
  }
}
