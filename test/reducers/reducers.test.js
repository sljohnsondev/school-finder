// import app from '../../src/reducers/app-reducer';
import app from '../../src/reducers/app-reducer';

describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect( (undefined, {}) ).toEqual([])
  });
});
