import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-model';

@Injectable({
   providedIn: 'root',
})
export class CommonService {
   constructor() {}
   items: Todo[] = [];

   addTodo(nameTask: string): Todo[] {
      const newItem: Todo = {
         id: Math.random().toString(36).substr(2, 3),
         name: nameTask,
         status: false,
         priority: 1,
      };
      if (!this.checkExit(newItem.id)) {
         this.items.push(newItem);
      }
      this.cbSort();
      return this.items;
   }

   checkExit(currentID: string): boolean {
      if (this.items.length < 1) {
         return false;
      }
      return this.items.some((ele: Todo) => ele.id === currentID);
   }

   deleted(id: string): Todo[] {
      const indexItem = this.items.findIndex((ele: Todo) => ele.id === id);
      console.log(indexItem);
      this.items.splice(indexItem, 1);
      this.cbSort();
      return this.items;
   }

   checkDone(item: Todo): Todo[] {
      const indexItem = this.items.findIndex(
         (ele: Todo): boolean => ele.id === item.id
      );
      if (indexItem > -1) {
         this.items[indexItem].status = !item.status;
      }
      this.cbSort();
      return this.items;
   }

   changePriority(itemModified: Todo): Todo[] {
      const indexItemModified = this.items.findIndex(
         (ele: Todo): boolean => ele.id === itemModified.id
      );
      if (indexItemModified > -1) {
         this.items[indexItemModified].priority = itemModified.priority;
      }
      this.cbSort();
      return this.items;
   }

   cbSort(): Todo[] {
      return this.items.sort((a: Todo, b: Todo): number => {
         if (a.priority > b.priority) {
            return -1;
         } else if (a.priority < b.priority) {
            return 1;
         } else {
            if (a.name > b.name) {
               return 1;
            } else if (a.name < b.name) {
               return -1;
            } else {
               return 0;
            }
         }
      });
   }
}
