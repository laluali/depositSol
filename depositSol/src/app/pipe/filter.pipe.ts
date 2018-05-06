import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    searchText = searchText.toLowerCase();
    items.forEach(item => {
    })
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
