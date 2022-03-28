import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DateAdapter} from "@angular/material/core";
import * as moment from "moment";


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {

  date: string = '';

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {idCard: string, plantCard: string},
              private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('de');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    var date = moment(this.date).format('DD.MM.yyyy');
    this.dialogRef.close(date);
  }

}
