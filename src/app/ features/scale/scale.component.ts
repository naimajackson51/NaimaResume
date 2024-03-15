import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrl: './scale.component.css'
})
export class ScaleComponent {
  bar0: string | undefined;
  bar1: string | undefined;
  bar2: string | undefined;
  bar3: string | undefined;

  private colors = ['darkred', 'orange', 'yellow', 'green'];

  @Input() public strength: number | undefined;
  constructor() {

  }
  ngOnInit() {
    const color = this.getColor(this.strength);
    this.setBarColors(color.index, color.color);
  }

  private getColor(strength: number | undefined) {
    let index = 0;

    if (strength === 10) {
      index = 0;
    } else if (strength === 20) {
      index = 1;
    } else if (strength === 30) {
      index = 2;
    } else if (strength === 40) {
      index = 3;
    } else {
      index = 4;
    }


    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  private setBarColors(count: number, color: string) {
    for (let n = 0; n < count; n++) {
      (this as any)['bar' + n] = color;
    }
  }
}
