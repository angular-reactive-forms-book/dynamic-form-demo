import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editor',
  template: `
    <form [formGroup]="editorForm"
          (ngSubmit)="handleSubmit()"
          class="form-group">

      <div class="form-group">
        <label>Choose type:</label>
        <select class="form-control"
                formControlName="type">
          <option>text</option>
          <option>number</option>
          <option>password</option>
          <option>range</option>
          <option>submit</option>
        </select>
      </div>

      <div class="form-group">
        <input type="text"
               class="form-control"
               placeholder="control name"
               formControlName="name">
      </div>

      <div class="form-group">
        <input type="text"
               class="form-control"
               placeholder="control label"
               formControlName="label">
      </div>
      <div class="form-group">
        <input type="text"
               class="form-control"
               placeholder="placeholder"
               formControlName="placeholder">
      </div>

      <button class="btn btn-outline-primary">submit</button>
    </form>
  `,
})
export class EditorComponent implements OnInit {

  private fb: FormBuilder;
  public editorForm: FormGroup;

  @Output()
  public formValue = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  ngOnInit(): void {
    this.editorForm = this.fb.group({
      type       : null,
      name       : null,
      label      : null,
      placeholder: null,
    });
  }

  // emit the form value and reset it
  public handleSubmit() {
    this.formValue.emit(this.editorForm.value);
    this.editorForm.reset();
  }
}
