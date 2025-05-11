import { Component } from '@angular/core';
import { ContactSwitcherFieldComponent } from '../contact-switcher-field/contact-switcher-field.component';

@Component({
  selector: 'app-form',
  imports: [ContactSwitcherFieldComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
