import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BackendService} from "../../../shared/backend.service";
import {Card} from "../../../interfaces/card";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})

export class EditDialogComponent implements OnInit {

  card: Card = {_id: '', plant: '', user_id: ''};
  plantCardOld: string = '';
  unnamed: boolean = false;
  text: string = '';

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {idCard: string, plantCard: string},
              private bs: BackendService)
  {}

  ngOnInit(): void {
    this.plantCardOld = this.data.plantCard;
    if(this.plantCardOld == 'Benenne deine Pflanze') {
      this.unnamed = true;
      this.text = 'Deine Pflanze hat noch keinen Namen';
    } else {
      this.text = 'Deine Pflanze heißt "' + this.plantCardOld + '"';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.card.plant = this.data.plantCard;
    this.card._id = this.data.idCard;
    this.bs.update(this.data.idCard, this.card).subscribe(
      response => {
        this.card = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
