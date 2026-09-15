import { interpolationsConverter } from '../../share/utils/interpolations-converter.util.js';

export class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.prueba = null;
  }

  async connectedCallback() {
    await this.obtenerDatos();
    await this.render();
  }

  async render() {
    const htmlResponse = await fetch(
      '/src/pages/home/home.page.html'
    );
    const template = await htmlResponse?.text();
    const cssResponse = await fetch('/src/pages/home/home.page.css');
    const style = await cssResponse?.text();

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      ${interpolationsConverter(template, this)}
    `;
  }

  async obtenerDatos() {
    if (!this.prueba) {
      return;
    }

    this.prueba = 'Esto es una prueba';
  }
}

customElements.define('home-page', HomePage);
