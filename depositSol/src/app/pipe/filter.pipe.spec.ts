///<reference path="filter.pipe.ts"/>
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  const itemsObj = [{'name': 'testname1'}, {'name': 'testname2'}];
  const itemObjRes = [{'name': 'testname2'}];
  const items = ['testname1', 'testname2'];
  const itemsRes = ['testname2'];
  beforeEach((() => {
    pipe = new FilterPipe();
  }));
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('providing no serchText returns itemsarray', function () {
    expect(pipe.transform( itemsObj, '', '')).toEqual(itemsObj);
  });
  it('providing no searchKey returns relevant itemsarray', function () {
    expect(pipe.transform( items, '2', '')).toEqual(itemsRes);
  });
  it('providing searchText returns relevant itemsarray', function () {
    expect(pipe.transform( itemsObj, '2', 'name')).toEqual(itemObjRes);
  });
});
