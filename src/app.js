import '/src/pages/home/home.page.js';

export class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.render();
  }

  async render() {
    document.createElement('home-page');
    this.shadowRoot.innerHTML = `
      <home-page></home-page>
    `;
  }
}

customElements.define('app-root', App);
