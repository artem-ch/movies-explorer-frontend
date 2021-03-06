class MainApi {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  async _handleResponse(res) {
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data;
  }

  async register(name, email, password) {
    const res = await fetch(`${this._baseURL}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    return this._handleResponse(res);
  }

  async login(email, password) {
    const res = await fetch(`${this._baseURL}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    return this._handleResponse(res);
  }

  async logout() {
    const res = await fetch(`${this._baseURL}/signout`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this._handleResponse(res);
  }

  async getUser() {
    const res = await fetch(`${this._baseURL}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this._handleResponse(res);
  }

  async updateUser(name, email) {
    const res = await fetch(`${this._baseURL}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    return this._handleResponse(res);
  }

  async getSavedMovies() {
    const res = await fetch(`${this._baseURL}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return this._handleResponse(res);
  }

  async saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    }) {
    const res = await fetch(`${this._baseURL}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    });

    return this._handleResponse(res);
  }

  async deleteMovie(movieId) {
    const res = await fetch(`${this._baseURL}/movies/${movieId}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return this._handleResponse(res);
  }
}

const mainApi = new MainApi('https://api.chagin.movies.nomoredomains.club');

export default mainApi;
