import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  selected: any;

  constructor(public app: AppComponent) {
    this.selected = null;
  }

  ngOnInit(): void { }

  async select(type: string) {
    this.app.select(type);
    this.selected = this.app.getSelected();
  }
}
