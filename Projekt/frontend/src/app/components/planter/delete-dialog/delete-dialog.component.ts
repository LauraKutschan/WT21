import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BackendService} from "../../../shared/backend.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {idCard: string, plantCard: string},
              private bs: BackendService,
              private router: Router)
  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    console.log('delete aufgerufen');
    this.bs.deleteOne(this.data.idCard).subscribe(
      (
        response: any) => {
        if(response.status == 204){
          this.deleteAllPlansToCard();
          this.router.navigateByUrl('/yourPlants');
          this.dialogRef.close();
        } else {
          console.log(response.status);
          console.log(response.error);
        }
      },
      error => console.log(error)
    );
  }

  deleteAllPlansToCard() {
    this.bs.deleteAllPlansToCard(this.data.idCard).subscribe(
      (response: any) => {
        console.log('response : ', response);
      });
  }
}
