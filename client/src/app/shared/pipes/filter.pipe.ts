import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../types';

@Pipe({
  name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {
  transform(courses: Array<Course>, category: string) {
    return category
      ? courses.filter((course) => course.category === category)
      : courses;
  }
}
