const fieldReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.fieldName]: action.newValue };
    default:
      return state;
  }
};

export default fieldReducer;
