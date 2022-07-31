import { Component, NgModule, OnInit, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../core/api.service';

import {
  Course,
  courseSort,
  FilePath,
  Lecturer,
  sortColumn,
} from '../shared/types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: Array<Course>;
  tableSort!: courseSort;
  lecturers!: Array<Lecturer>;
  clicked = true;
  courseCode?: string;
  openCourse?: number;
  btn?: Element;
  filter?: string;
  filterCategory!: string | undefined;

  constructor(private apiService: ApiService, private renderer: Renderer2) {}

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

  openToggleDetails(course_code: string, i: number) {
    this.courseCode = course_code;
    this.openCourse = i;
    this.btn = this.renderer.selectRootElement(`.${course_code}`, true);
    this.renderer.removeClass(this.btn, 'bi-plus-circle');
    this.renderer.addClass(this.btn, 'bi-dash-circle');
    this.clicked = false;
  }

  closeToggleDetails(course_code: string, i: number) {
    this.renderer.removeClass(this.btn, 'bi-dash-circle');
    this.renderer.addClass(this.btn, 'bi-plus-circle');
    if (i === this.openCourse) {
      this.clicked = true;
    } else {
      this.btn = this.renderer.selectRootElement(`.${course_code}`, true);
      this.openToggleDetails(course_code, i);
    }
  }

  openDetails(course_code: string): boolean {
    let td = course_code;
    if (this.courseCode === td && !this.clicked) {
      return true;
    } else {
      return false;
    }
  }

  exportCoursesData() {
    this.apiService.exportCourses().subscribe({
      next: (data: FilePath) => {
        window.open(`${environment.serverUrl}/${data.name}`);
      },
      error: (err) => console.error(err),
    });
  }

  filterCategoryFunc(cat: string): boolean {
    const value = this.filterCategory;
    console.log(value);

    if (!value) {
      return true;
    }
    if (value === cat) {
      return true;
    } else {
      return false;
    }
  }
}
