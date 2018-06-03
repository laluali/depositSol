import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any, searchText: any, searchKey: string): any[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return ((searchKey !== '') ? item[searchKey].toLowerCase().includes(searchText) : item.toLowerCase().includes(searchText));
    });
  }
}
