import { LitElement, html, css } from 'lit';
import { pagesStyles } from "./styles/page-styles";

export class EitPageLinksNumpages extends LitElement {
  static styles = [
    pagesStyles,
    css`
      :host {
        border: 1px solid #ccc;
    `,
  ];

  static get properties() {
    return {
      numPages: { type: Number },
      selectedPage: { type: Number },
    };
  }

  constructor() {
    super();
    this.numPages = 5;
    this.selectedPage = 1;
  }

  render() {
    return html`
      <ul>
        ${this.createPageTemplate()}
      </ul>
    `;
  }

  createPageTemplate() {
    const templates = [];
    for(let i = 1; i <= this.numPages; i++) {
      templates.push(html`
        <li class="${i === this.selectedPage ? 'selected' : ''}">${i}</li>  
      `)
    }
    return templates;
  }
}
customElements.define('eit-page-links-numpages', EitPageLinksNumpages);
