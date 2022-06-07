import { LitElement, html, css } from 'lit';
import { pagesStyles } from './styles/page-styles';

export class EitPageLinks extends LitElement {
  static styles = [
    pagesStyles,
    css`
      :host {
        display: block;
        margin-bottom: 1rem;
      }
      li.selected {
        background-color: #32bd16;
      }
    `,
  ];

  static get properties() {
    return {
      pages: { type: Array },
      selectedPage: { type: String },
    };
  }

  constructor() {
    super();
    this.pages = [];
    this.selectedPage = 0;
  }

  render() {
    return html`
      <ul>
        ${this.pages.map((page) => html`
            <li 
              @click=${() => this.setPage(page)}
              class="${page == this.selectedPage ? 'selected' : ''}"
            >${page}</li>
        `)}
      </ul>
    `;
  }

  setPage(page) {
    this.selectedPage = page;
    this.dispatchEvent(new CustomEvent('eit-page-links-change', {
      bubbles: true,
      composed: true,
      detail: {
        selectedPage: this.selectedPage,
      },
    }));
  }
}
customElements.define('eit-page-links', EitPageLinks);
