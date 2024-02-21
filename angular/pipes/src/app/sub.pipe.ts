import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub'
})
export class SubPipe implements PipeTransform {

  transform(value: string, val1:number, val2:number): string {
    return value.substring(val1,val2)
  }

}
