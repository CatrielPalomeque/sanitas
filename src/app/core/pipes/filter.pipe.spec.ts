import { FilterPipe } from './filter.pipe';
import { Iimagelist } from '../interfaces/imagelist.interface';

describe('FilterPipe', () => {

  const pipe = new FilterPipe();
  const itemList: Iimagelist[] = [
    {
      id: 1,
      text: 'Ipsum test',
      photo: 'url'
    },
    {
      id: 2,
      text: 'Lorem test two',
      photo: 'url'
    },
    {
      id: 3,
      text: 'Dolor test two',
      photo: 'url'
    }];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all items', () => {
    expect(pipe.transform(itemList, ['id', 'text'], '').length == 3).toBeTruthy();
  });

  it('should return one items by id', () => {
    expect(pipe.transform(itemList, ['id', 'text'], '1').length == 1).toBeTruthy();
  });

  it('should return one items by text', () => {
    expect(pipe.transform(itemList, ['id', 'text'], 'Ipsum').length == 1).toBeTruthy();
  });

  it('should return two items by text', () => {
    expect(pipe.transform(itemList, ['id', 'text'], 'two').length == 2).toBeTruthy();
  });

  it('should return empty', () => {
    expect(pipe.transform(itemList, ['id', 'text'], 'not found').length == 0).toBeTruthy();
  });

  it('test 2 key level', () => {
    const itemList: any = {
      id: 1,
      text: '',
      key: {
        2: 'level2ok'
      }
    }
    expect(pipe.transform([itemList], ['id', 'text', 'key.2'], 'level2ok').length > 0).toBeTruthy();
  });

  it('test 3 key level', () => {
    const itemList: any = {
      id: 1,
      text: '',
      key: {
        2: {
          3: 'level3ok'
        }
      }
    }
    expect(pipe.transform([itemList], ['id', 'text', 'key.2.3'], 'level3ok').length > 0).toBeTruthy();
  });

  it('test 4 key level', () => {
    const itemList: any = {
      id: 1,
      text: '',
      key: {
        2: {
          3: {
            4: 'level4ok'
          }
        }
      }
    }
    expect(pipe.transform([itemList], ['id', 'text', 'key.2.3.4'], 'level4ok').length > 0).toBeTruthy();
  });

  it('test 5 key level', () => {
    const itemList: any = {
      id: 1,
      text: '',
      key: {
        2: {
          3: {
            4: {
              5: 'level5ok'
            }
          }
        }
      }
    }
    expect(pipe.transform([itemList], ['id', 'text', 'key.2.3.4.5'], 'level5ok').length > 0).toBeTruthy();
  });



});
