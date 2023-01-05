import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string): void {
    this.emmitSearch.emit(value);
  }
}
