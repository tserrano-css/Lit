import { LitElement, html, css } from 'lit';
import { pagesStyles } from './styles/page-styles';

export class EitPageLinks extends LitElement {
  static styles = [
    pagesStyles,
    css`
      
    `,
  ];

  static get properties() {
    return {
      pages: { type: Array },
      selectedPage: { type: Number },
    };
  }

  constructor() {
    super();
    this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedPage = 1;
  }

  render() {
    return html`
      <ul>
        ${this.pages.map((page) => html`
            <li class="${page === this.selectedPage ? 'selected' : ''}">${page}</li>
        `)}
      </ul>
    `;
  }
}
customElements.define('eit-page-links', EitPageLinks);
