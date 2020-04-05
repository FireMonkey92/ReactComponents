import ROUTES from './route';
import API_MAP from './url-api';

export const API_URL = process.env.API_URL;

export const API_SETTINGS = {
    API_URL,
};

export const config = {
    ROUTES,
    API_SETTINGS,
    API_MAP,
    API_URL,
};

export default function ConfigStorage() {
    return config;
}
