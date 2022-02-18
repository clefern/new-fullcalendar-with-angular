import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reminder } from 'src/app/interfaces/reminder';
import { CalendarService } from 'src/app/services/calendar.service';
import { ReminderMapperService } from './services/reminder-mapper.service';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.scss']
})
export class ReminderFormComponent implements OnInit {

  reminderForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Reminder,
    private matDialog: MatDialog,
    private readonly _fb: FormBuilder,
    private readonly _service: CalendarService,
    private readonly _mapper: ReminderMapperService
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
      text: [null, [
        Validators.required,
        Validators.maxLength(30)
      ]],
      date: [null, Validators.required],
      // time: [null, Validators.required],
      color: [null, Validators.required],
      city: null
    })
  }

  onSubmitReminder(): void {
    const date: Date = this.reminderForm.value.date;
    const reminder: Reminder = {
      ...this.data,
      ...this.reminderForm.value,
      date: this.data.date !== date ? date.toISOString().split('T')[0] : date
    };
    this.data ? this.updateReminder(reminder) : this.createReminder(reminder);
    this.matDialog.closeAll();
  }

  updateReminder(reminder: Reminder) {
    reminder.reminderId = this.data?.reminderId;
    this._service.edit(reminder);
  }

  createReminder(reminder: Reminder): void {
    reminder.reminderId = this._mapper.mapUuidToReminder();
    this._service.create(reminder);
  }

  closeModal(): void {
    this.matDialog.closeAll();
  }

  deleteReminder(): void {
    this._service.delete(this.data.reminderId);
    this.matDialog.closeAll();
  }

}
