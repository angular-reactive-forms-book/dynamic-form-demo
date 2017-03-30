import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormRendererComponent} from './form-renderer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DynamicControlComponent} from './dynamic-control.component';

@NgModule({
  imports        : [CommonModule, ReactiveFormsModule],
  declarations   : [FormRendererComponent, DynamicControlComponent],
  entryComponents: [DynamicControlComponent],
  exports        : [FormRendererComponent]
})
export class FormEngineModule {
}
