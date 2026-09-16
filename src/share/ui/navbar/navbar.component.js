import { interpolationsConverter } from '../../utils/interpolations-converter.util.js';

export class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.render();
  }

  async render() {
    const [responseHTML, responseCSS] = await Promise.all([
      fetch('/src/share/ui/navbar/navbar.component.html'),
      fetch('/src/share/ui/navbar/navbar.component.css'),
    ]);

    const [template, style] = await Promise.all([
      responseHTML?.text(),
      responseCSS?.text(),
    ]);

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      ${interpolationsConverter(template, this)}
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
