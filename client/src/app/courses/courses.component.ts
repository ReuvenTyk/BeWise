import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ApiService } from '../core/api.service';
import { Course, courseSort, sortColumn } from '../shared/types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: Array<Course>;
  tableSort!: courseSort;
  showDetails = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();

    this.tableSort = {
      column: 'course_name',
      dirAsc: true,
    };
  }

  getCourses() {
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.log(err),
    });
  }

  sortCourses(column: sortColumn) {
    if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
    } else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
    }

    const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';

    this.apiService.getSortedCourses(column, direction).subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.error(err),
    });
  }

  displaySort(column: sortColumn): string {
    if (this.tableSort.column === column) {
      return this.tableSort.dirAsc ? 'bi-chevron-up' : 'bi-chevron-down';
    } else {
      return 'bi-chevron-expand';
    }
  }
}
