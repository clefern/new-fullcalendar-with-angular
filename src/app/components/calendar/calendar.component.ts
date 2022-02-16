import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Reminder } from 'src/app/interfaces/reminder';
import { CalendarService } from 'src/app/services/calendar.service';
import { WeatherService } from 'src/app/services/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { ReminderFormComponent } from '../reminder-form/reminder-form.component';
import { CalendarOptions, EventAddArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import { ApplicationStore, ReminderState } from 'src/app/store/models/store.interfaces';
import { Store } from '@ngrx/store';
import { getReminderState } from 'src/app/store/reducers/app.reducer';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<boolean>();

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    editable: true,
    droppable: true,
    selectable: true,
    eventClick: this.handleEventClick.bind(this), // bind is important!
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'E V E N T    1', date: '2022-02-12', color: '#34fd56', city: 'São Paulo' },
      { title: 'E V E N T    2', date: '2022-02-12', color: '#34fd56', city: 'São Paulo'  },
    ]
  };
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  reminder$: Observable<ReminderState>;

  constructor(
    private calendarService: CalendarService,
    private weatherService: WeatherService,
    private matDialog: MatDialog,
    private readonly _store: Store<ApplicationStore>
  ) { }

  ngOnInit(): void {
    this.reminder$ = this._store.select(getReminderState);
    this.calendarService.list(new Date())
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((reminders: Reminder[]) => {
        reminders.map((reminder: Reminder) => {
          return {
            ...reminder,
            weather: this.getWeather(reminder.city),
          };
        });
        console.log(reminders);
      });
  }

  getWeather(city: string) {
    const x = this.weatherService.getWeatherInformation(city);
    console.log(x);
    return x;
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  openReminderForm(reminder?: Reminder) {
    this.matDialog.open(ReminderFormComponent, {
      data: {
        ...reminder
      },
    });
  }

  handleEventClick(arg) {
    const eventApi: EventApi = arg.event;
    console.log(eventApi.extendedProps);

    const reminder: Reminder = {
      text: eventApi.title,
      dateTime: eventApi.start,
      color: eventApi.backgroundColor,
      city: eventApi.extendedProps.city
    };
    this.calendarService.setEventApi(eventApi);
    this.openReminderForm(reminder)
  }

  handleDateClick(arg: EventAddArg) {
    console.log({arg})
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  teste(what) {
    console.log(what);

  }

}
