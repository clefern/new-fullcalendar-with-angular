import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import { ReminderFormComponent } from '../../reminder-form/reminder-form.component';
import { CalendarSettings } from '../models/calendar-settings.interface';
import { Reminder } from 'src/app/interfaces/reminder';
import { ReminderMapperService } from '../../reminder-form/services/reminder-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarMapperService {
  constructor(
    private matDialog: MatDialog,
    private _mapperReminder: ReminderMapperService
  ) { }

  mapSettings(reminders?: Reminder[]): CalendarSettings {
    const options: CalendarOptions = this.mapSettingsToOptions();
    return {
      options: {
        ...options,
        events: reminders
      }
    }
  }

  mapSettingsToOptions(): CalendarOptions {
    return {
      initialView: 'dayGridMonth',
      editable: true,
      droppable: true,
      selectable: true,
      eventClick: this.mapHandleEventClick.bind(this), // bind is important!
    };
  }

  mapHandleEventClick(arg) {
    const eventApi: EventApi = arg?.event;
    const reminder: Reminder = this._mapperReminder.mapEventApiToReminder(eventApi);
    this.openReminderForm(reminder);
  }

  openReminderForm(eventApi?: Reminder) {
    this.matDialog.open(ReminderFormComponent, {
      data: eventApi,
    });
  }


}
