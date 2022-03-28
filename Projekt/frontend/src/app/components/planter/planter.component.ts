import { Component, OnInit } from '@angular/core';
import {Plan} from "../../interfaces/plan";
import {BackendService} from "../../shared/backend.service";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../../interfaces/card";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "./edit-dialog/edit-dialog.component";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {DeleteEntriesDialogComponent} from "./delete-entries-dialog/delete-entries-dialog.component";

@Component({
  selector: 'app-planter',
  templateUrl: './planter.component.html',
  styleUrls: ['./planter.component.css']
})
export class PlanterComponent implements OnInit {
  wasserPlans: Plan[] = [];
  duengerPlans: Plan[] = [];
  umtopfPlans: Plan[] = [];
  deleted: boolean = false;
  plan: Plan = {_id: '', activity: '', date: '', idPlant: ''};
  selected: any;
  idCard: string = '';
  plantCard: string = '';

  constructor( private route: ActivatedRoute,
               private bs: BackendService,
               public dialog: MatDialog) {}

  ngOnInit(): void {
    this.idCard = this.route.snapshot.paramMap.get('id') || '';
    this.readClickedPlant(this.idCard);
    this.readAllToPlant();
  }

  readAllToPlant(): void {
    this.wasserPlans = [];
    this.duengerPlans = [];
    this.umtopfPlans = [];

    //Wasser
    this.bs.getAllPlansToPlantAndActivity(this.idCard, 'Wasser').subscribe(
      (
        response: Plan[]) => {
        this.wasserPlans = response;
      },
      error => console.log(error)
    );

    //Duenger
    this.bs.getAllPlansToPlantAndActivity(this.idCard, 'Duenger').subscribe(
      (
        response: Plan[]) => {
        this.duengerPlans = response;
      },
      error => console.log(error)
    );

    //Umtopfen
    this.bs.getAllPlansToPlantAndActivity(this.idCard, 'Umtopfen').subscribe(
      (
        response: Plan[]) => {
        this.umtopfPlans = response;
      },
      error => console.log(error)
    );
  }

  delete(id: string): void {
    console.log("id :" ,id );
    this.bs.deleteOnePlan(id).subscribe(
      (
        response: any) => {
        console.log('response : ', response);
        if(response.status == 204){
          console.log(response.status);
          this.reload(true);
        } else {
          console.log(response.status);
          console.log(response.error);
          this.reload(false);
        }
      },
      error => console.log(error)
    );
  }

  readOne(id: string): void {
    this.bs.getOnePlan(id).subscribe(
      (response: Plan) => {
        this.plan = response;
      },
      error => console.log(error)
    );
  }

  readClickedPlant (id: string): void {
    this.bs.getOneCard(id).subscribe(
      (response: Card) => {
        this.plantCard = response.plant;
        return this.plantCard;
      },
      error => console.log(error)
    );
  }

  addPlan(activity: string, date: string): void {
    this.plan.activity = activity;
    this.plan.idPlant = this.idCard;
    this.plan.date = date;

    this.bs.addPlan(this.plan).subscribe(
      response => {
        this.plan = response;
        this.readAllToPlant();
      },
      error => {
        console.log(error);
      });
  }

  reload(deleted: boolean): void {
    this.deleted = deleted;
    this.readAllToPlant();
  }


  //DIALOGE
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

  openDeleteDialog () {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {'idCard': this.idCard, 'plantCard': this.plantCard},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openAddDialog (activity: string) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result != null) {
        const date = result;
        this.addPlan(activity, date);
      }
    });
  }

  openDeleteEntriesDialog(activity: string) {
    const dialogRef = this.dialog.open(DeleteEntriesDialogComponent, {
      width: '400px',
      data: {'activity': activity, 'idCard': this.idCard},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.readAllToPlant();
    });
  }
}
