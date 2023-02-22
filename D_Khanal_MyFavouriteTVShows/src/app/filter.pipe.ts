import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'Filter'
})
export class FilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: string) {
    if (!contentArray ){
      return contentArray;
    } 
    else {
      return contentArray.filter((player)=> 
      { 
        return player.type?.toLowerCase() === type?.toLowerCase()
      });
    }
  }

}