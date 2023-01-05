import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, ListComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, NgxPaginationModule],
  exports: [
    HeaderComponent,
    SearchComponent,
    ListComponent,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
  ],
})
export class SharedModule {}
