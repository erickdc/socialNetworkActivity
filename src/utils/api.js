import "whatwg-fetch";

const apiURL = "https://jsonplaceholder.typicode.com";

function parseJSON(response) {
  return new Promise(resolve =>
    response
      .json()
      .then(json =>
        resolve({
          status: response.status,
          ok: response.ok,
          json
        })
      )
      .catch(() => {})
  );
}

export const requestAPI = (url, body, options) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json"
    },
    body: undefined
  };
  if (body) {
    requestOptions.body = body;
  }
  return new Promise((resolve, reject) => {
    fetch(apiURL + url, { ...requestOptions, ...options })
      .then(parseJSON)
      .then(response => {
        if (response.ok) {
          return resolve(response.json);
        }
        const errorResponse = response.json.message || response.json.error;
        return reject(errorResponse);
      })
      .catch(error => reject({ networkError: error.message }));
  });
};

export const get = (url, options) => {
  return requestAPI(url, false, { method: "GET", ...options });
};
