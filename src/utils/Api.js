class Api {
  constructor(options) {
    this.options = options;
    this.baseUrl = options.baseUrl;
  }
  // _request(endpoint, options) {return fetch(`${this.baseUrl}${endpoint}`, options).then(this._checkResponse);}

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json(); // тут проверка ответа
  }
  // альтернативный метод с использованием метода request, который закоментил выше
  // setInitialUserInfo() {return this._request(`/users/me`, {method: "GET", headers: this.options.headers, });}

  setInitialUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "GET",
      headers: this.options.headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "GET",
      headers: this.options.headers,
    }).then(this._checkResponse);
  }

  addLike(card) {
    return fetch(`${this.options.baseUrl}/cards/${card.cardData._id}/likes`, {
      method: "PUT",
      headers: this.options.headers,
    }).then(this._checkResponse);
  }

  removeLike(card) {
    return fetch(`${this.options.baseUrl}/cards/${card.cardData._id}/likes`, {
      method: "DELETE",
      headers: this.options.headers,
    }).then(this._checkResponse);
  }

  editProfile(inputValues) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify(inputValues),
    }).then(this._checkResponse);
  }

  addCard(cardData) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify({ name: cardData.name, link: cardData.link }),
    }).then(this._checkResponse);
  }

  delete(cardId) {
    return fetch(`${this.options.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.options.headers,
    }).then(this._checkResponse);
  }

  avatarEdit(avatar) {
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify(avatar),
    }).then(this._checkResponse);
  }
}


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-72",
  headers: {
    authorization: "ae5a51f8-81eb-4b98-b197-2ef227e48cb1",
    "Content-Type": "application/json",
  },
});

export default api;