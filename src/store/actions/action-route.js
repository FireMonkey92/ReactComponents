import { push } from 'connected-react-router';

export const ActionRouteNavigate = (location, obj) => {
    if (obj) {
        return push(location, obj);
    }

    return push(location);
};
