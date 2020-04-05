import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import rSession from "./reducer-session";
import rLoading from './reducer-loading';
import rUser from './reducer-user.js';
import rServerData from './reducer-server-data.js';
import rUtilData from './reducer-utils';
import rLocal from './reducer-local'


export const RootReducer = history => (
    combineReducers({
        router: connectRouter(history),
        rLoading,
        rSession,
        rUser,
        rServerData,
        rUtilData,
        rLocal
    })
);
