import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers.component';
import { ProfileCardModule } from '../profile-card/profile-card.module';

@NgModule({
  declarations: [LecturersComponent],
  imports: [CommonModule, ProfileCardModule],
  exports: [LecturersComponent],
})
export class LecturersModule {}
