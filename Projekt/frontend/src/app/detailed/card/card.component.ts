import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/card";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../shared/backend.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards!: Card[];
  card!: Card;
  id: string = '';
  deleteCards: Card[] = [];
  checked = false;


  constructor( private route: ActivatedRoute,
               private bs: BackendService,
               fb: FormBuilder) {}

  ngOnInit(): void {
    this.readAll();
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readAll(): void {
    console.log("readAll aufgerufen");
    this.bs.getAllPlants().subscribe(
      (
        response: Card[]) => {
        this.cards = response;
        console.log("Alle Karten: " + this.cards);
        return this.cards;
      },
      error => console.log(error)
    );
  }

  delete(): void {
    console.log("id : " );
    this.deleteCards.forEach((card:Card) => {
      this.bs.deleteOne(card._id).subscribe((response: Card) => {
        if(this.cards.find(x => x == response)) {
        this.cards.splice(this.cards.indexOf(response), 1);
      }});
    });
    this.deleteCards=[];
    this.ngOnInit();
  }

  readOne(id: string): void {
    this.bs.getOnePlant(id).subscribe(
      (response: Card) => {
        this.card = response;
        console.log(this.card);
        return this.card;
      },
      error => console.log(error)
    );
  }

  add(): void {
    const values = 'Click to edit';
    this.card.plant = values;
    this.card._id = this.id;
    this.bs.add(this.card).subscribe(
      response => {
      console.log(response);
      console.log(response._id);
    },
    error => {
      console.log(error);
    });
    this.cards.push(this.card);
  }


  check(card: Card):void {
    console.log("aufgerufen" + card._id);

    if(this.deleteCards.length >= 1) {
      this.deleteCards.forEach((cardDel: Card) => {
        console.log(cardDel._id);
        if (cardDel._id == card._id) {
          this.deleteCards.splice(this.deleteCards.indexOf(card), 1);
        } else {
          this.deleteCards.push(card);
        }
      });
    } else {
      this.deleteCards.push(card);
    }
    console.log("fertig" + this.deleteCards);

  }

  cancel(): void {

  }
}
