import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  selected: Array<any>;
  flippedCards: Array<number>;
  score: number;
  finished: boolean;

  constructor(public app: AppComponent) {
    this.selected = null;
    this.flippedCards = [];
    this.score = 0;
    this.finished = false;
  }

  ngOnInit(): void { }

  async select(type: string) {
    this.selected = null;
    this.flippedCards = [];
    this.score = 0;
    this.finished = false;

    this.app.select(type);
    const sel = JSON.parse(JSON.stringify(this.app.getSelected()));
    this.selected = sel;
    this.selected.push(...JSON.parse(JSON.stringify(sel)));
    AppComponent.mixArray(this.selected);
  }

  async flip(card: number) {
    this.selected[card].show = true;
    this.flippedCards.push(card);

    if(this.selected[card].sound != null) {
      this.app.play(this.selected[card].sound);
    }

    if(this.flippedCards.length > 2) {
      // Hides previous two cards
      let num = this.flippedCards.shift();
      this.selected[num].show = false;

      num = this.flippedCards.shift();
      this.selected[num].show = false;
    }
    if(this.flippedCards.length == 2 && this.selected[this.flippedCards[0]].title == this.selected[this.flippedCards[1]].title) {
        // Cards are equal
        this.selected[this.flippedCards[0]].disabled = true;
        this.selected[this.flippedCards[1]].disabled = true;
        this.flippedCards = [];
        ++this.score;
        if(this.score == this.selected.length / 2) {
          this.finished = true;
        }
    }
  }
}
