import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'satya'
})
export class SatyaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value % 2 == 0)
    {
      return "Even"
    }
    else {
      return "ODD"
    }
  }

}
