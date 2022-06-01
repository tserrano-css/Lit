import { LitElement, html, css } from 'lit';

export class EitPageLinksNumpages extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      ul {
        display: flex;
        margin: 0;
        padding: 0;
      }
      li {
        padding: 0.5em;
        border: 1px solid #ccc;
        background-color: #eee;
        list-style: none;
        margin-right: 0.5em;
        min-width: 1em;
        text-align: center;
      }
      li.selected {
        background-color: #d33;
        color: #fff;
      }
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
