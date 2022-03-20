import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/card";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../shared/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards!: Card[];
  card: Card = {_id: '', plant: '', user_id: ''};
  id: string = '';
  deleted = false;
  user_id: string | undefined = '';
  slideIndex: number = 1;

  constructor( private route: ActivatedRoute,
               private bs: BackendService,
               private fb: FormBuilder,
               private router: Router,
               private auth: AuthService,
  ) {}

  ngOnInit(): void {
    console.log(this.auth.getUser()?._id);
    this.user_id = this.auth.getUser()?._id;
    this.readAll();
  }

  readAll(): void {
    console.log("readAll aufgerufen " + this.user_id);
    if (this.user_id != null) {
      this.bs.getAllCardsToUser(this.user_id).subscribe(
        (
          response: Card[]) => {
          if(response == null) {
            console.log('response ist null');
           } else {
            this.cards = response;
          }
        },
        error => console.log(error)
      );
    }
  }

  delete(id: string): void {
    console.log('delete aufgerufen');
    this.bs.deleteOne(id).subscribe(
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

  add(): void {
    if (this.user_id != null) {
      this.card.plant = 'Benenne deine Pflanze';
      this.card.user_id = this.user_id;
      this.bs.add(this.card).subscribe(
        response => {
          console.log(response);
          this.card = response;
          console.log('Card: ' + this.card.plant + this.card.user_id);
          this.cards.push(this.card);
        },
        error => {
          console.log(error);
        });
    }
  }

  reload(deleted: boolean): void {
    this.deleted = deleted;
    this.readAll();
  }


}
