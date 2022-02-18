export interface Reminder {
  reminderId: string;
  title?: string;
  text: string;
  date: Date | string;
  time?: string;
  color: string;
  city?: string;
}
