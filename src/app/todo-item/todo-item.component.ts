import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/models/todo-model';

@Component({
   selector: 'app-todo-item',
   templateUrl: './todo-item.component.html',
   styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
   @Input() item!: Todo;
   @Output() idItem = new EventEmitter<string>();
   @Output() itemModify = new EventEmitter<Todo>();
   @Output() itemModified = new EventEmitter<Todo>();

   onDeleted(id: string) {
      const isDeleted = window.confirm('are u sure');
      if (isDeleted) {
         this.idItem.emit(id);
      }
   }
   checkDone(): void {
      // this.item.status = !this.item.status;
      this.itemModify.emit(this.item);
   }

   changePri(flagAc: string): void {
      if (flagAc === 'up') {
         this.item.priority =
            this.item.priority < 5 ? ++this.item.priority : this.item.priority;
      } else {
         this.item.priority =
            this.item.priority > 1 ? --this.item.priority : this.item.priority;
      }

      let deepCopy = Object.assign({}, this.item);
      this.item = { ...deepCopy };
      this.itemModified.emit(this.item);
   }
}
