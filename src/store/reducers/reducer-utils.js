import ACTIONS from '../actions-names';

const { UTILS_ACTIONS } = ACTIONS;
export default function (state = {}, action) {

    switch (action.type) {
        case UTILS_ACTIONS.UPDATEDATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}