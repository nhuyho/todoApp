export interface MarkColorPriority {
   priority: number;
   colorMark: string;
}
export const markColorPriorities: MarkColorPriority[] = [
   {
      priority: 5,
      colorMark: 'rgb(255, 102, 102)',
   },
   {
      priority: 4,
      colorMark: 'rgb(255, 140, 102)',
   },
   {
      priority: 3,
      colorMark: 'rgb(255, 179, 102)',
   },
   {
      priority: 2,
      colorMark: 'rgb(255, 217, 102)',
   },
   {
      priority: 1,
      colorMark: '#9ccc65',
   },
];
