import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any, searchtext: any): any {

    if(value.length===0){
      return value
    }

    return value.filter(function(search: { first_name: string | string; }){
      return search.first_name.toLowerCase().indexOf(searchtext.toLowerCase()) > -1
    });
    
  }

}
