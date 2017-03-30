import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule],
  declarations: [EditorComponent],
  exports     : [EditorComponent]
})
export class EditorModule {
}
