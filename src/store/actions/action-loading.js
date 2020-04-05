import { LOADING_ACTIONS } from '../actions-names/loading.js'

export const ActionLoadingUpdate = (key, value) => {
  const data = [];
  data[key] = value;
  return {
    type: LOADING_ACTIONS.LOADING_UPDATE,
    data
  }
}
