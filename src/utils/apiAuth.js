const BASE_URL = 'https://auth.nomoreparties.co';

function getResponseData(res, setErrorMessage) {
  if (!res.ok) {
    //получаем ответ от сервера с текстом ошибки, чтобы передать его в попап
    res.text().then((text) => {
      setErrorMessage(JSON.parse(text).message || JSON.parse(text).error);
    });
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export function register(email, password, setErrorMessageRegister) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => getResponseData(res, setErrorMessageRegister));
}

export function login(email, password, setErrorMessageLogin) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => getResponseData(res, setErrorMessageLogin))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
}

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => getResponseData(res))
    .then((data) => data);
}
