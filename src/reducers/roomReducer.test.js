import {
  createRoom,
  purgeRoom,
  newMessage,
  userJoined,
  userLeft,
  userChangedConfirmStatus
} from 'actions/roomActions';
import reducer, { initialState } from './roomReducer';

describe('app reducer', () => {
  const sampleMessages = [
    {
      msgId: '96492ccce9ab85e627676d31c36d30fc',
      msgType: 'MESSAGE',
      msgTimestamp: Date.now(),
      msgAuthor: 'esteban',
      msgContent: 'i like trains'
    },
    {
      msgId: '891d77cec49be28056ee422a5c3a3b4d',
      msgType: 'MESSAGE',
      msgTimestamp: Date.now(),
      msgAuthor: 'balotteli',
      msgContent: 'i do not'
    },
    {
      msgId: '10546e4d3953836e85ade2a88127dafc',
      msgType: 'MESSAGE',
      msgTimestamp: Date.now(),
      msgAuthor: 'inko',
      msgContent: 'je suis le me'
    }
  ];
  const sampleUsers = [
    {
      userId: '16ec37e54f30fa9bbedebb0a23f206f5',
      userName: 'bauwan',
      userIsConfirmed: false
    },
    {
      userId: '21667a383683544d77b2e01885f72689',
      userName: 'neuwan',
      userIsConfirmed: true
    }
  ];
  it('should return the initial state', () => {
    const invalidAction = {
      type: 'INVALID_ACTION'
    };
    expect(reducer(undefined, invalidAction)).toStrictEqual(initialState);
  });
  it('should handle CREATE_ROOM', () => {
    const newRoom = {
      userName: 'ernest17',
      roomName: 'dungsanddrags',
      hostId: '21667a383683544d77b2e01885f72689',
      messages: sampleMessages,
      users: sampleUsers
    };
    const action = createRoom({ ...newRoom });
    const expectedState = {
      ...newRoom
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle PURGE_ROOM', () => {
    const action = purgeRoom();
    const expectedState = initialState;
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle NEW_MESSAGE', () => {
    const currentDate = Date.now();
    const msg = {
      msgId: '81b18a30613c14f5cdd502f6516be6b9',
      msgType: 'MESSAGE',
      msgTimestamp: currentDate,
      msgAuthor: 'jasmine13',
      msgContent: 'Lolem ipsum dapsem mapsem'
    };
    const action = newMessage({ ...msg });
    const expectedState = {
      ...initialState,
      messages: [...initialState.messages, { ...msg }]
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle USER_JOINED', () => {
    const newUser = {
      userId: 'cafe3ea37fbc422b705eacc97cf0bfad',
      userName: 'caffeinaman'
    };
    const action = userJoined({ ...newUser });
    const expectedState = {
      ...initialState,
      users: [...initialState.users, { ...newUser, userIsConfirmed: false }]
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle USER_LEFT', () => {
    const newUser = {
      userId: 'cafe3ea37fbc422b705eacc97cf0bfad',
      userName: 'caffeinaman'
    };

    const actionJoin = userJoined({ ...newUser });
    const userJoinedState = reducer(initialState, actionJoin);
    const expectedState = initialState;
    const actionLeft = userLeft({ userId: 'cafe3ea37fbc422b705eacc97cf0bfad' });
    expect(reducer(userJoinedState, actionLeft)).toStrictEqual(expectedState);
  });
  it('should handle USER_CHANGED_CONFIRM_STATUS', () => {
    const firstUserId = sampleUsers[0].userId;
    const action = userChangedConfirmStatus({
      userId: firstUserId,
      userIsConfirmed: true
    });
    const stateWithUsers = {
      ...initialState,
      users: sampleUsers
    };
    const expectedState = {
      ...initialState,
      users: [
        { ...sampleUsers[0], userIsConfirmed: true },
        ...sampleUsers.slice(1)
      ]
    };
    expect(reducer(stateWithUsers, action)).toStrictEqual(expectedState);
  });
});
