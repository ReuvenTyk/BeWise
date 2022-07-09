import { Component, Input, OnInit } from '@angular/core';
import { Lecturer } from 'src/app/shared/types';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  lecturers!: Array<Lecturer>;

  @Input() lecturer = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    start_date: '',
    image: '',
  };
  constructor() {}

  ngOnInit(): void {}

  experience() {
    const year = new Date().getFullYear();
    return year - parseInt(this.lecturer.start_date);
  }
}
