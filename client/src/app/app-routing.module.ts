import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturersComponent } from './lecturers/lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

const routes: Routes = [
  {
    path: 'lecturers-component',
    component: LecturersComponent,
  },
  {
    path: 'profile-card-component',
    component: ProfileCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
