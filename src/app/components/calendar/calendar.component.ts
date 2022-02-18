import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Reminder } from 'src/app/interfaces/reminder';
import { CalendarService } from 'src/app/services/calendar.service';
import { WeatherService } from 'src/app/services/weather.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ApplicationStore, LoaderState } from 'src/app/store/models/store.interfaces';
import { Store } from '@ngrx/store';
import { getLoaderState } from 'src/app/store/reducers/app.reducer';
import { CalendarMapperService } from './services/calendar-mapper.service';
import { CalendarSettings } from './models/calendar-settings.interface';
import { CalendarObservablesService } from './services/calendar-observables.service';
import { ReminderMapperService } from '../reminder-form/services/reminder-mapper.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  settings: CalendarSettings;

  @ViewChild('calendar') calendar: FullCalendarComponent;
  reminderList$: Observable<Reminder[]>;
  reminder$: Observable<Reminder[]>;
  loader$: Observable<LoaderState>;

  constructor(
    private calendarService: CalendarService,
    private weatherService: WeatherService,
    private readonly _store: Store<ApplicationStore>,
    public readonly _mapper: CalendarMapperService,
    public readonly _observable: CalendarObservablesService,
    private readonly _reminderMapper: ReminderMapperService
  ) { }

  ngOnInit(): void {
    // this.calendarService.list(new Date())
    //   .subscribe((reminders: Reminder[]) => {
    //     reminders.map((reminder: Reminder) => {
    //       return {
    //         ...reminder,
    //         weather: this.getWeather(reminder.city),
    //       };
    //     });
    //     console.log(reminders);
    //   });
  }

  ngAfterViewInit(): void {
    this.reminderState$();
    this.loaderState$();
    this.reminderList$ = this._observable.reminders$().pipe(
      tap((list: Reminder[]) => this.calendarService.setList(list))
    );
  }

  reminderState$(): void {
    this.reminder$ = this._observable.remindersState$().pipe(
      filter(val => !!val),
      map((reminders) => this._reminderMapper.mapArrayToDisplay(reminders)),
      tap(list => this.settings = this._mapper.mapSettings(list))
    )
  }

  loaderState$(): void {
    this.loader$ = this._store.select(getLoaderState).pipe(
      tap((loader) => console.log({loader}))
    );
  }

  getWeather(city: string) {
    const x = this.weatherService.getWeatherInformation(city);
    console.log(x);
    return x;
  }

}
