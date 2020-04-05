import ACTION from '../actions-names';

const { LOCAL_ACTIONS } = ACTION;

export function ActionStoreLocal(key, data) {
  return {
    type: LOCAL_ACTIONS.UPDATE,
    key,
    data,
  };
}

// export const ActionSetActiveTableGroupColumns = (tableColumnSettings) => {
//   return (dispatch) => {
//     dispatch(ActionStoreLocal('tableGroupColumnSettings', tableColumnSettings));
//   };
// };

