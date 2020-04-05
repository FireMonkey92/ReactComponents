import ACTIONS from '../actions-names/index'
import { ActionLoadingUpdate } from './action-loading.js'
import { ActionCheckResponce } from './action-server-data';
import UtilsData from '../../api/utils-data'

const { UTILS_ACTIONS } = ACTIONS

export function ActionUtilsData(key, payload) {
  const data = {}
  data[key] = payload
  return {
    type: UTILS_ACTIONS.UPDATEDATA,
    data
  }
}


// export function ActionGetUtilState(params, headers) {
//   return dispatch => {
//     dispatch(ActionLoadingUpdate('states', true))

//     UtilsData.getStates(params, headers)
//       .then(res => {
//         dispatch(ActionUtilsData('states', res))
//         dispatch(ActionCheckResponce(res))
//       })
//       .catch(err => console.log(err))
//       .finally(() => dispatch(ActionLoadingUpdate('states', false)))
//   }
// }


