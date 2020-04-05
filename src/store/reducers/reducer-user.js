import ACTIONS from '../actions-names';

const { USER_ACTIONS } = ACTIONS;

export default (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIONS.USER_UPDATE:
            if (action.key)
                return {
                    [action.key]: action.data
                }

            return {
                ...state,
                ...action.data
            }


        default:
            return state;
    }
}
