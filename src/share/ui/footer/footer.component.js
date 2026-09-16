import { interpolationsConverter } from '../../utils/interpolations-converter.util.js';

export class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.render();
  }

  async render() {
    const [responseHtml, responseCss] = await Promise.all([
      fetch('/src/share/ui/footer/footer.component.html'),
      fetch('/src/share/ui/footer/footer.componnent.css'),
    ]);

    const [template, style] = await Promise.all([
      responseHtml?.text(),
      responseCss?.text(),
    ]);

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      ${interpolationsConverter(template, this)}
    `;
  }
}

customElements.define('footer-component', FooterComponent);
