import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lecturer } from '../shared/types';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLecturersList(): Observable<Array<Lecturer>> {
    return this.http.get<Array<Lecturer>>(`http://localhost:3000/lecturers`);
  }
}
