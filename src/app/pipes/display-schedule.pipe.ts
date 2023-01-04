import { Pipe, PipeTransform } from '@angular/core';
import { OpeningSchedule } from '../models/OpeningSchedule';

@Pipe({
  name: 'displaySchedule'
})
export class DisplaySchedulePipe implements PipeTransform {
  transform(schedule: OpeningSchedule): string {
    console.log(schedule);
    return `Sunday: ${schedule.sunday}\nMonday: ${schedule.monday}\nTuesday: ${schedule.tuesday}\nWednesday: ${schedule.wednesday}\nThursday: ${schedule.thursday}\nFriday: ${schedule.friday}\nSaturday: ${schedule.saturday}`;
  }
}
