import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const cachedAxios = setupCache(axios, {
    ttl:2 * 60 * 1000
});

export  default cachedAxios;
