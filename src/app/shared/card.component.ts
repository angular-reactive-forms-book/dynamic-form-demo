import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{ title }}</h4>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent  {
  @Input() title: string;
}
