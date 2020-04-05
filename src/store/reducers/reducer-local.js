import ACTIONS from '../actions-names';
const { LOCAL_ACTIONS } = ACTIONS;

export default (state = {}, action) => {
  switch (action.type) {
    case LOCAL_ACTIONS.UPDATE:

      if (action.key) {
        return {
          ...state,
          [action.key]: action.data,
        };
      }

      return {
        ...state,
        ...action.data,
      };
    case LOCAL_ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
};
