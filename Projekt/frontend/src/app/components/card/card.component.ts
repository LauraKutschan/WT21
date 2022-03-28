import { Component, OnInit } from '@angular/core';
import {Card} from "../../interfaces/card";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../shared/backend.service";
import {FormBuilder} from "@angular/forms";
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
    this.user_id = this.auth.getUser()?._id;
    this.readAll();
  }

  readAll(): void {
    if (this.user_id != null) {
      this.bs.getAllCardsToUser(this.user_id).subscribe(
        (
          response: Card[]) => {
          this.cards = response;
        },
        error => console.log(error)
      );
    }
  }

  delete(id: string): void {
    this.bs.deleteOne(id).subscribe(
      (
        response: any) => {
        if(response.status == 204){
          this.reload(true);
        } else {
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
          this.card = response;
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
