import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listToFilter: any[], keys: string[], valueToSearch: string ): any[] {
    if(!valueToSearch) return listToFilter;
    const resultFilter:any[] = [];
    for(const item of listToFilter){
      for(const key of keys){
        
        let _item;
        const _key = key.split('.');
        switch(_key.length){
          case 1: _item = item[_key[0]]; break;
          case 2: _item = item[_key[0]][_key[1]]; break;
          case 3: _item = item[_key[0]][_key[1]][_key[2]]; break;
          case 4: _item = item[_key[0]][_key[1]][_key[2]][_key[3]]; break;
          case 5: _item = item[_key[0]][_key[1]][_key[2]][_key[3]][_key[4]]; break;
        }

        _item = String(_item);

        if(_item.toLowerCase().indexOf(valueToSearch.toLowerCase()) > -1){
          resultFilter.push(item);
       };
      }
    };
    let result = resultFilter.filter((item,index)=>{
      return resultFilter.indexOf(item) === index;
    })
    return result;
  }

}
