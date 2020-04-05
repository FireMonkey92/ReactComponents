import { URL_MAP } from '../constants/urls';


const {
    BASE_URL,
    DASHBOARD,
} = URL_MAP;

export const buildRoute = (...args) => {
    return (
        args.reduce((prevRoute, arg) => {
            return prevRoute + (typeof arg === 'number' || arg.indexOf('(') === -1 ? `/${arg}` : arg);
        }, '')
    )

}

const ROUTES = {
    ROOT: `/${BASE_URL}`,
    DASHBOARD: buildRoute(DASHBOARD),
}

export default ROUTES;
