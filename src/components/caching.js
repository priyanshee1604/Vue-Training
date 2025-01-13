import axios from 'axios';
import cacheaxios from 'axios-cache-plugin';

const cachedaxios = cacheaxios(axios,{
    maxCacheSize: 5,
    ttl: 60000,
    debug: true
});

cachedaxios.__addFilter(/\/product\/\d+/);


export default cachedaxios;