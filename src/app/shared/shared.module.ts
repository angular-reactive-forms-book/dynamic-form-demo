import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports     : [CommonModule],
  declarations: [CardComponent],
  exports     : [CardComponent]
})
export class SharedModule {
}
