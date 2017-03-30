import {Component} from '@angular/core';
import {ControlConfig} from './form-renderer/control-config';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <h1>Dynamic Form Renderer</h1>
      
      <div class="row">
        <div class="col">
          <app-card title="Editor">
            <app-editor (formValue)="addForm($event)"></app-editor>
          </app-card>
        </div>
        
        <div class="col">
          <app-card title="Generated Code">
            <pre>{{ formConfig | json }}</pre>
          </app-card>
        </div>

        <div class="col">
          <app-card title="Form">
            <app-form-renderer [formConfig]="formConfig"
                               (formSubmit)="submitForm($event)"></app-form-renderer>
          </app-card>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {

  public formConfig: ControlConfig[];

  constructor() {
    this.formConfig = [];
  }

  public addForm(control) {
    this.formConfig = [...this.formConfig, control];
  }

  public submitForm(value: any) {
    console.log(value);
  }
}










