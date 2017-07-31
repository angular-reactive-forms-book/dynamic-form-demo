import {Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ControlConfig} from './control-config';
import {DynamicControlComponent} from './dynamic-control.component';

@Component({
  selector: 'app-form-renderer',
  template: `
    <form [formGroup]="form"
          (ngSubmit)="submitForm()">
      
      <ng-container #container></ng-container>

    </form>
  `
})
export class FormRendererComponent implements OnChanges {

  @Input()
  private formConfig: ControlConfig[];

  @Output()
  public formSubmit: EventEmitter<any>;

  // we need to cast the type to 'ViewContainerRef' (originally ElementRef)
  @ViewChild('container', {read: ViewContainerRef})
  private formContainer: ViewContainerRef;

  // the 'ComponentFactoryResolver' needed for dynamic component rendering
  private cfr: ComponentFactoryResolver;
  public form: FormGroup;

  constructor(cfr: ComponentFactoryResolver) {
    this.cfr        = cfr;
    this.form       = new FormGroup({});
    this.formSubmit = new EventEmitter<any>();
  }

  public submitForm() {
    this.formSubmit.emit(this.form.value);
  }

  ngOnChanges() {
    if (this.formConfig) {

      // clear the array (for demo purpose only)
      this.formContainer.clear();

      this.formConfig.forEach(controlConfig => {

        // if the control type is genrating a button, we don't need to include
        // in the formGroup
        if (!(controlConfig.type === 'submit')) {

          // add the control to the group
          this.form.addControl(controlConfig.name, new FormControl());
        }
        this.buildControl(controlConfig);
      });
    }
  }

  // render a component dynamically
  private buildControl(controlConfig) {

    // first, we need to create a component factory
    const controlFactory = this.cfr.resolveComponentFactory(DynamicControlComponent);

    // we handle the factory to the viewContainer
    const control        = this.formContainer.createComponent(controlFactory);

    // initialize the instance properties
    control.instance.controlConfig = controlConfig;
    control.instance.formGroup     = this.form;
  }
}
