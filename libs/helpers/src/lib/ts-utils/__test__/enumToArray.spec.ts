import { enumToArray } from '../enumToArray';

describe('enumToArray', () => {
  it('enumからkeyの配列を返す', () => {
    enum BloodTypes {
      A = 'A',
      B = 'B',
      O = 'O',
      Ab = 'AB',
    }

    const result = enumToArray(BloodTypes).getKeys();

    expect(result).toEqual(['A', 'B', 'O', 'Ab']);
  });

  it('enumからvalueの配列を返す', () => {
    enum BloodTypes {
      A = 'A',
      B = 'B',
      O = 'O',
      Ab = 'AB',
    }

    const result = enumToArray(BloodTypes).getValues();

    expect(result).toEqual(['A', 'B', 'O', 'AB']);
  });
});
