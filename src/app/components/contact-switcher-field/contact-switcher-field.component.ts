import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface IContact {
  iconSrc: string;
  title: string;
  placeholder: string;
  validators: ValidatorFn[];
}

@Component({
  selector: 'app-contact-switcher-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-switcher-field.component.html',
  styleUrl: './contact-switcher-field.component.scss',
})
export class ContactSwitcherFieldComponent {
  readonly contacts: Array<IContact> = [
    {
      iconSrc: 'assets/icons/phone.svg',
      title: 'Phone',
      placeholder: '+12125551234',
      validators: [Validators.pattern(/^\+[1-9]\d{1,14}$/)],
    },
    {
      iconSrc: 'assets/icons/email.svg',
      title: 'Email',
      placeholder: 'robert.it@gmail.com',
      validators: [Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
    },
  ];

  readonly additionalContacts: Array<{ iconSrc: string; title: string }> = [
    {
      iconSrc: 'assets/icons/telegram.svg',
      title: 'Telegram',
    },
    {
      iconSrc: 'assets/icons/whatsapp.svg',
      title: 'Whatsapp',
    },
    {
      iconSrc: 'assets/icons/facebook-messenger.svg',
      title: 'Facebook Messenger',
    },
    {
      iconSrc: 'assets/icons/instagram.svg',
      title: 'Instagram',
    },
  ];

  currentContact: IContact = this.contacts[0];
  isSwitcherActive: boolean = false;
  inputControl = new FormControl('', this.currentContact.validators);
  hasError = false;

  constructor() {
    this.inputControl.statusChanges.subscribe((status) => {
      this.hasError = status === 'INVALID' && this.inputControl.touched;
    });
  }

  selectContact(contact: IContact) {
    this.currentContact = contact;
    this.isSwitcherActive = false;
    this.inputControl.setValidators(contact.validators);
    this.inputControl.updateValueAndValidity();
  }

  onBlur() {
    this.inputControl.markAsTouched();
    this.hasError = this.inputControl.invalid;
  }
}
