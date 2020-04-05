
import { config } from "../config/index.js";
import http from "../services/http";
import $q from "q";

const { API_MAP, API_URL } = config;

const headerConfig = {
    'Access-Control-Allow-Origin': "*",
    'Content-Type': 'application/json',
}

export default class ServerData {

    static getPhysicians(params, header) {
        const deferred = $q.defer();
        const headers = {
            ...headerConfig,
            ...header
        }
        // http.get(API_URL + API_MAP.PHYSICIANS, headers)
        //     .then(res => deferred.resolve(res))
        //     .catch(err => deferred.reject(err))
        // return deferred.promise;
    }

}

