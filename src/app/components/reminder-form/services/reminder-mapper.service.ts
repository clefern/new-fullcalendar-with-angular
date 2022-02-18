import { Injectable } from '@angular/core';
import { EventApi } from '@fullcalendar/angular';
import { Reminder } from 'src/app/interfaces/reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderMapperService {

  mapEventApiToReminder(eventApi: EventApi): Reminder {
    const dateTime: string[] = eventApi.start.toISOString().split('T');
    const date: string = dateTime[0];
    const time: string = dateTime[1];

    return {
      reminderId: eventApi?.extendedProps?.reminderId,
      text: eventApi.title,
      date,
      time,
      color: eventApi.backgroundColor,
      city: eventApi?.extendedProps?.city
    }
  }

  mapArrayToDisplay(reminders: Reminder[]): Reminder[] {
    return reminders.map((reminder: Reminder) => ({
      ...reminder,
      title: reminder?.text,
      start: this.mapDateAndTimeToDateTime(reminder)
    }));
  }

  mapDateAndTimeToDateTime(reminder: Reminder): string {
    return `${reminder.date}T${reminder.time}`;
  }

  mapUuidToReminder() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
