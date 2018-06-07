import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter',
})
export class Filter implements PipeTransform {

  transform(input: any, args: any, cloumn: any): any {
    const data = [];
    if (!input || !args) {
      return input;
    }
    input
    // filter items array, items which match and return true will be kept, false will be filtered out
    input.forEach(item => {
      if(item[cloumn].toLowerCase().search(args.toLowerCase()) !== -1){
        data.push(item);
      }
    });
    return data;
  }
}

