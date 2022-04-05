import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-selectfilter-component',
  templateUrl: 'selectfilter.component.html',
  styleUrls: ['selectfilter.component.scss'],
})
export class SelectFilterComponent {
  @Input() variantArray: string[] = [];
  @Input() name?: string;
  @Input() selected?: string;
  @Output() selectedChange = new EventEmitter<string>();
  @Output() onChanged = new EventEmitter();
  onSelectedChanged(value?: string) {
    this.selected = value;
    this.selectedChange.emit(value);
    this.onChanged.emit();
  }
  delete() {
    this.selectedChange.emit(undefined);
    this.onChanged.emit();
  }
}
