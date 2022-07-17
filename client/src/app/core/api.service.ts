import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course, Lecturer } from '../shared/types';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLecturersList(): Observable<Array<Lecturer>> {
    return this.http.get<Array<Lecturer>>(`${environment.serverUrl}/lecturers`);
  }
  getCoursesList(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${environment.serverUrl}/courses`);
  }

  getSortedCourses(
    column: string,
    direction: string
  ): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(
      `${environment.serverUrl}/courses?column=${column}&sort=${direction}`
    );
  }
}
