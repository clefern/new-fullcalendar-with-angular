import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReminderFormComponent } from '../reminder-form/reminder-form.component';
import { ReminderFormModule } from '../reminder-form/reminder-form.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { StoreModule } from '@ngrx/store';
import { CalendarMapperService } from './services/calendar-mapper.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
@NgModule({
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule,
    ReminderFormModule,
    FullCalendarModule,
    StoreModule
  ],
  providers: [
    CalendarMapperService
  ],
  entryComponents: [ReminderFormComponent],
})
export class CalendarModule { }
