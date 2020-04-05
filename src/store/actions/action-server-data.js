import ACTIONS from "../actions-names/index";
import { ActionLoadingUpdate } from "./action-loading.js";
import ServerData from "../../api/server-data";
import ROUTES from "../../config/route.js";
import _ from "lodash";
import { ActionSessionClear } from "./actions-session";
import { ActionRouteNavigate } from "./action-route";

const { SERVER_DATA_ACTIONS } = ACTIONS;

export function ActionServerData(ns, payload) {
  const data = {};
  data[ns] = payload;
  return {
    type: SERVER_DATA_ACTIONS.SERVER_DATA_UPDATE,
    data
  };
}

// CHECKS RESPONCE
// export function ActionCheckResponce(res) {
//   return dispatch => {
//     if (res.error) {
//       if (_.includes(res.message.toLowerCase(), "unauthorized access")) {
//         dispatch(ActionSessionClear());
//         dispatch(ActionRouteNavigate(ROUTES.ERROR));
//       }
//     }
//   }
// }
