import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reminder } from 'src/app/interfaces/reminder';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.scss']
})
export class ReminderFormComponent implements OnInit {

  reminderForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Reminder,
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.data && this.fillForm();
  }

  fillForm() {
    this.reminderForm.patchValue(this.data)
  }

  buildForm(): void {
    this.reminderForm = this._fb.group({
      id: null,
      text: [null, [
        Validators.required,
        Validators.maxLength(30)
      ]],
      dateTime: [null, Validators.required],
      color: [null, Validators.required],
      city: null
    })
  }

  onSubmitReminder(): void {
    const reminder: Reminder = this.reminderForm.value;

  }

}
