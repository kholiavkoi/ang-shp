import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent {

  @Input()
  message: any = {}

  @Input()
  index: number = -1

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>()


  onDelete() {
    this.delete.emit(this.index)
  }


}
