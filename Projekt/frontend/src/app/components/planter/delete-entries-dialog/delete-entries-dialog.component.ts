import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BackendService} from "../../../shared/backend.service";

@Component({
  selector: 'app-delete-entries-dialog',
  templateUrl: './delete-entries-dialog.component.html',
  styleUrls: ['./delete-entries-dialog.component.css']
})
export class DeleteEntriesDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteEntriesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {activity: string, idCard: string},
              private bs: BackendService)
  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.bs.deleteAllPlansToActivity(this.data.idCard, this.data.activity).subscribe(
      (
        response: any) => {
        console.log('response : ', response);
        if(response.status == 204){
          console.log(response.status);
          this.dialogRef.close();
        } else {
          console.log(response.status);
          console.log(response.error);
        }
      },
      error => console.log(error)
    );
  }

}
