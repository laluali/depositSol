///<reference path="filter.pipe.ts"/>
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  let items: any;
  beforeEach((() => {
    pipe = new FilterPipe();
  }));
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('providing no serchText returns itemsarray', function () {
    expect(pipe.transform( '', '', '')).toBe([]);
  });
});
