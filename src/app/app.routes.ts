import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ContactSwitcherFieldComponent } from './components/contact-switcher-field/contact-switcher-field.component';

export const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
    pathMatch: 'full',
  },
  {
    path: 'component',
    component: ContactSwitcherFieldComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
];
