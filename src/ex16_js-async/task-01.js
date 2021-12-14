function fetch(url, method, bodyRequest) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if (method === 'GET') {
      xhr.send();
    } else {
      xhr.setRequestHeader('Content-Type', 'application/');
    }

    xhr.onreadystatechange = function status(response) {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(response);
      } else {
        reject(new Error('Произошла ошибка соединения'));
      }

      xhr.send(bodyRequest);
    };
  });
}

module.exports = fetch;
