import { Component } from '@angular/core';
import * as components from '../cards/available.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LangCards';

  available:  Map<string, any>;
  selected: any;

  constructor() {
    this.available = new Map();
    this.selected = null;
  }

  ngOnInit(): void {
    (components  as  any).default.forEach(el => {
      import(`../cards/${el.path}`).then(component => {
        this.available.set(el.name, (component  as  any).default);
      });
   });
  }

  public getAvailable() {
    return this.available;
  }

  public getSelected() {
    return this.selected;
  }
  public select(type: string) {
    this.selected = this.available.get(type);
  }

  async play(sound: string) {
    const audio = new Audio(`assets/sounds/${sound}`);
    audio.play();
  }

  public static mixArray(array: Array<any>) {
    // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
