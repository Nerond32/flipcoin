import { saveUserName, saveUserToken } from 'actions/appActions';
import reducer, { initialState } from './appReducer';

describe('app reducer', () => {
  it('should return the initial state', () => {
    const invalidAction = {
      type: 'INVALID_ACTION'
    };
    expect(reducer(undefined, invalidAction)).toStrictEqual(initialState);
  });
  it('should handle SAVE_USER_NAME', () => {
    const action = saveUserName({ userName: 'ursula84' });
    const expectedState = {
      ...initialState,
      userName: 'ursula84'
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle SAVE_USER_TOKEN', () => {
    const action = saveUserToken({
      userToken: '5b4e87b60738800ebffb9d0cb38e2c99'
    });
    const expectedState = {
      ...initialState,
      userToken: '5b4e87b60738800ebffb9d0cb38e2c99'
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
});
