//MyRequest.ts
import { ElMessage } from 'element-plus';
import {type UseFetchOptions } from "nuxt/app";

const request = <T = any>(url: string, options?: UseFetchOptions<T>) => {
  return new Promise((resolve, reject) => {
    const headers = useRequestHeaders(['cookie']);
    const { baseURL } = useRuntimeConfig().public;
    const new_options:UseFetchOptions<T> = {
      baseURL:baseURL,
      headers:headers,
      ...options
    }
    
    useFetch(url, {
      ...new_options,
      onRequest({ request, options }) {
        // Set the request headers
        options.headers = options.headers || {};
      },
      onRequestError({ request, options, error }) {
        ElMessage.closeAll()
        error && ElMessage.error('Sorry, The Data Request Failed');
        // Handle the request errors
        reject(error)
      },
      onResponse({ request, response, options }) {
        // Process the response data
        resolve(response._data);
      },
      onResponseError({ request, response, options }) {
        console.log('🚀 ~ file: MyRequest.ts:42 ~ onResponseError ~ request:', request);
        // Handle the response errors
      },
    });
  })
};

export const useDefaultRequest = {
  get: <T = any>(url: string, options?: UseFetchOptions<T>) => {
    return request(url, { method: 'GET', ...options });
  },
  post: <T = any>(url: string, options?: UseFetchOptions<T>) => {
    return request(url,  { method: 'POST', ...options });
  },
};

const asyncRequest = async <T = any>(url: string, options?: UseFetchOptions<T>) => {
  
}

