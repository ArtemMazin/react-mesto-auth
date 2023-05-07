class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.authorization = headers.authorization;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  getInitialCards() {
    return fetch(`${this.baseUrl}cards`, {
      headers: {
        authorization: this.authorization,
      },
    }).then((res) => this._getResponseData(res));
  }
  getProfileData() {
    return fetch(`${this.baseUrl}users/me`, {
      headers: {
        authorization: this.authorization,
      },
    }).then((res) => this._getResponseData(res));
  }
  changeProfileData(data) {
    return fetch(`${this.baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    }).then((res) => this._getResponseData(res));
  }
  addNewCard(data) {
    return fetch(`${this.baseUrl}cards`, {
      method: 'POST',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getResponseData(res));
  }
  changeAvatar(data) {
    return fetch(`${this.baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._getResponseData(res));
  }
  deleteCard(cardID) {
    return fetch(`${this.baseUrl}cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  }
  changeLikeCardStatus(cardID, isLiked) {
    return isLiked
      ? fetch(`${this.baseUrl}cards/${cardID}/likes`, {
          method: 'PUT',
          headers: {
            authorization: this.authorization,
            'Content-Type': 'application/json',
          },
        }).then((res) => this._getResponseData(res))
      : fetch(`${this.baseUrl}cards/${cardID}/likes`, {
          method: 'DELETE',
          headers: {
            authorization: this.authorization,
            'Content-Type': 'application/json',
          },
        }).then((res) => this._getResponseData(res));
  }
}
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    authorization: 'ad0e399e-98fe-4937-8e46-ff5ac7a149ca',
  },
});
export default api;
