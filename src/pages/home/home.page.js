import { interpolationsConverter } from '../../share/utils/interpolations-converter.util.js';

export class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.render();
  }

  async render() {
    const [htmlResponse, cssResponse] = await Promise.all([
      fetch('/src/pages/home/home.page.html'),
      fetch('/src/pages/home/home.page.css'),
    ]);
    const [template, style] = await Promise.all([
      htmlResponse?.text(),
      cssResponse?.text(),
    ]);

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      ${interpolationsConverter(template, this)}
    `;
  }
}

customElements.define('home-page', HomePage);
