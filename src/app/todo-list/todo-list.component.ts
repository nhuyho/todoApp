import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/models/todo-model';

@Component({
   selector: 'app-todo-list',
   templateUrl: './todo-list.component.html',
   styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
   @Input() items!: Todo[];
   @Output() idItemToDel = new EventEmitter<string>();
   @Output() itemModify = new EventEmitter<Todo>();
   @Output() itemModified = new EventEmitter<Todo>();

   onDeleted(id: string): void {
      this.idItemToDel.emit(id);
   }
   onCheckDone(itemDone: Todo): void {
      this.itemModify.emit(itemDone);
   }

   onChangePri(itemModified: Todo): void {
      this.itemModified.emit(itemModified);
   }
}
