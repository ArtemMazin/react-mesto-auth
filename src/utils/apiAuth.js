const BASE_URL = 'https://auth.nomoreparties.co';

export function register(email, password, setErrorMessageRegister) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (!res.ok) {
      //получаем ответ от сервера с текстом ошибки, чтобы передать его в попап
      res.text().then((text) => {
        setErrorMessageRegister(JSON.parse(text).message);
      });
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  });
}

export function login(email, password, setErrorMessageLogin) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (!res.ok) {
      //получаем ответ от сервера с текстом ошибки, чтобы передать его в попап
      res.text().then((text) => {
        setErrorMessageLogin(JSON.parse(text).message);
      });
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json().then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
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
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
