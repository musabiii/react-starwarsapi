export default class ServiceAPI {
  constructor() {
    this.apiBase = "https://swapi.dev/api";
  }

  getResourse = async (url) => {
    const apiPath = `${this.apiBase}${url}`;
    const res = await fetch(apiPath);
    if (!res.ok) {
      throw new Error(`not fetch ${url} status ${res.status} `);
    }
    const resJSON = await res.json();
    return await resJSON;
  };

  getFilms = async (id) => {
    const films = await this.getResourse(`/films/`);
    return films.results;
  };

  getRoot = async () => {
    const root = await this.getResourse("/");
    return root;
  };

  getData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`not fetch ${url} status ${res.status} `);
    }
    const resJSON = await res.json();
    return await resJSON;
  };
}
