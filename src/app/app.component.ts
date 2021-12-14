import { Component, ViewChild } from '@angular/core';
import {
   markColorPriorities,
   MarkColorPriority,
} from './shared/models/mark-color-priority';
import { Todo } from './shared/models/todo-model';
import { CommonService } from './shared/service/common.service';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   title = 'todoApp';
   todos: Todo[] = [];
   note: MarkColorPriority[] = markColorPriorities;
   @ViewChild(TodoFormComponent, { static: true })
   todoFormComponent!: TodoFormComponent;

   constructor(private cmService: CommonService) {}

   addItem(data: string): void {
      this.todos = [...this.cmService.addTodo(data)];
      this.todoFormComponent.inputNameTask.nativeElement.value = '';
   }

   onDel(id: string): void {
      this.cmService.deleted(id);
   }

   checkDone(item: Todo): void {
      this.todos = this.cmService.checkDone(item);
   }

   changePriority(itemModified: Todo): void {
      this.todos = [...this.cmService.changePriority(itemModified)];
   }
}
