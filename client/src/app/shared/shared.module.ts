import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FilterTablePipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [HeaderComponent, FilterTablePipe],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FilterTablePipe],
})
export class SharedModule {}
