export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointData = weakMap.get(endpoint);
    if (endpointData >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (endpointData + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
