import USERAPI from '../../api/user.js'
import { USER_ACTIONS } from '../actions-names/users.js'
import { ActionLoadingUpdate } from './action-loading.js'
import { ActionSessionStart, ActionSessionClear } from './actions-session.js'
import { ActionCheckResponce } from './action-server-data';
import { ActionRouteNavigate } from './action-route.js'
import { UtilsNotificationManager } from '../../utils/utils-notification';

import ROUTES from '../../config/route.js'

export const ActionUserUpdate = (key, value) => {
  const data = [];
  data[key] = value;

  return {
    type: USER_ACTIONS.USER_UPDATE,
    data
  }
}

// export const ActionLogin = (params) => {
//   return dispatch => {
//     dispatch(ActionLoadingUpdate('login', true))
//     USERAPI.login(params)
//       .then((res) => {
//         dispatch(ActionUserUpdate('login', res))
//         if (!res.success) {
//           UtilsNotificationManager.error({ message: res.message })
//         }
//       })
//       .catch(err => console.log('err :', err))
//       .finally(() => dispatch(ActionLoadingUpdate('login', false)))

//   }
// }
