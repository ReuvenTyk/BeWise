import { Component, Input, OnInit } from '@angular/core';
import { Lecturer } from '../shared/types';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss'],
})
export class LecturersComponent implements OnInit {
  lecturers!: Array<Lecturer>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getLecturers();
  }

  getLecturers() {
    this.apiService.getLecturersList().subscribe({
      next: (data: Array<Lecturer>) => {
        this.lecturers = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log(this.lecturers),
    });
  }
}
