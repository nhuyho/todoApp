import { Directive, HostBinding, Input, SimpleChanges } from '@angular/core';
import { markColorPriorities } from './shared/models/mark-color-priority';

@Directive({
   selector: '[appMarkColorPriority]',
})
export class MarkColorPriorityDirective {
   @Input() priority!: number;
   @HostBinding('style.backgroundColor') bgColor!: string;
   constructor() {}

   ngOnChanges(changes: SimpleChanges): void {
      const color = markColorPriorities.find(
         (ele) => ele.priority === changes.priority.currentValue
      )?.colorMark;
      this.bgColor = color ?? 'transparent';
   }
}
