import {ControlConfig} from "./control-config";
import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-control',
  template: `      
    <!-- just to show the ngIf else in action :) -->
    <button *ngIf="controlConfig.type === 'submit'; else control"
            type="submit"
            class="btn btn-outline-primary">submit
    </button>

    <ng-template #control>
      <div class="form-group"
           [formGroup]="formGroup">

        <label>{{ controlConfig.label}}</label>

        <input [type]="controlConfig.type"
               [placeholder]="controlConfig.placeholder"
               [formControlName]="controlConfig.name"
               class="form-control">
      </div>
    </ng-template>
  `,
})
export class DynamicControlComponent {
  public formGroup: FormGroup;
  public controlConfig: ControlConfig;
}
