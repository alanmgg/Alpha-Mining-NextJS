import { handleResponse, handleError } from "./apiUtils";

export function getEdaData(
  symbol,
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://alphaminingapi.herokuapp.com/eda?symbol=" + symbol;

  return fetch(endpoint_url, {
    method: "GET"
  })
    .then(responseHandler)
    .catch(errorHandler);
}

export function getAcpData(
  symbol,
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://alphaminingapi.herokuapp.com/acp?symbol=" + symbol;

  return fetch(endpoint_url, {
    method: "GET"
  })
    .then(responseHandler)
    .catch(errorHandler);
}

export function getForecastAdData(
  symbol,
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://alphaminingapi.herokuapp.com/forecast-ad?symbol=" + symbol;

  return fetch(endpoint_url, {
    method: "GET"
  })
    .then(responseHandler)
    .catch(errorHandler);
}

export function getForecastBaData(
  symbol,
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://alphaminingapi.herokuapp.com/forecast-ba?symbol=" + symbol;

  return fetch(endpoint_url, {
    method: "GET"
  })
    .then(responseHandler)
    .catch(errorHandler);
}

export function getClasificationData(
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://alphaminingapi.herokuapp.com/classification-ad-ba";

  return fetch(endpoint_url, {
    method: "GET"
  })
    .then(responseHandler)
    .catch(errorHandler);
}

export function getClusteringData(
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://alphaminingapi.herokuapp.com/segmentation-classification";

  return fetch(endpoint_url, {
    method: "GET"
  })
    .then(responseHandler)
    .catch(errorHandler);
}
