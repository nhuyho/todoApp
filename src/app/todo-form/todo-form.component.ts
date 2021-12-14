import {
   Component,
   ElementRef,
   EventEmitter,
   OnInit,
   Output,
   ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-todo-form',
   templateUrl: './todo-form.component.html',
   styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
   todoForm: FormGroup;
   constructor(private fb: FormBuilder) {}

   @ViewChild('formValue', { static: true })
   inputNameTask!: ElementRef<HTMLInputElement>;
   @Output() newItem = new EventEmitter();

   ngOnInit(): void {
      this.todoForm = this.fb.group({
         taskName: ['', Validators.minLength(5)],
      });
   }

   addItem() {
      if (this.inputNameTask.nativeElement.value.length > 0) {
         this.newItem.emit(this.inputNameTask.nativeElement.value);
      }
   }
   get f() {
      return this.todoForm.controls;
   }
}
