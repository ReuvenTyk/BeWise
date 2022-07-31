import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
