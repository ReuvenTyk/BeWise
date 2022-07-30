import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [HeaderComponent, FilterPipe],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FilterPipe],
})
export class SharedModule {}
