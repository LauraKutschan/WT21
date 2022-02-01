import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/card";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../shared/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards!: Card[];
  card: Card = {_id: '', plant: ''};
  id: string = '';
  deleted = false;


  constructor( private route: ActivatedRoute,
               private bs: BackendService,
               private fb: FormBuilder,
               private router: Router
  )
  {}

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    console.log("readAll aufgerufen");
    this.bs.getAllCards().subscribe(
      (
        response: Card[]) => {
        this.cards = response;
        console.log("Alle Karten: " + this.cards);
        return this.cards;
      },
      error => console.log(error)
    );
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
    this.card.plant = 'Benenne deine Pflanze';
    console.log('Vorher: ' + this.card.plant);
    this.bs.add(this.card).subscribe(
      response => {
        console.log('Nachher: ' + this.card.plant);
        this.card = response;
        this.cards.push(this.card);
    },
    error => {
      console.log(error);
    });
  }

  reload(deleted: boolean) {
    this.deleted = deleted;
    this.readAll();
  }
}
