import { LitElement, html, css } from "lit";
import "@dile/dile-pages/dile-pages.js";
import "./eit-switch.js";
import "./eit-prop.js";
import "./eit-page-links.js";

export class EitPageSwitch extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
    return {
      active: { type: Boolean },
      pages: { type: Array },
      page: { type: String },
      test: { type: String },
    };
  }

  constructor() {
    super();
    this.active = true;
    this.page = "tres";
    this.test = "5";
    this.pages = ["uno", "dos", "tres"];
  }

  render() {
    return html`
      <eit-prop .propString=${this.test} propNumber="5"></eit-prop>

      <eit-page-links 
        .pages=${this.pages} 
        selectedPage="${this.page}"
        @eit-page-links-change=${this.doSelectedChange}
      ></eit-page-links>

      <eit-switch
        ?checked=${this.active}
        @eit-switch-change=${this.changeActiveListener}
      ></eit-switch>

      <button @click=${this.changeActive}>Cambiar active</button>
      <button @click=${this.showOne}>Cambiar página 1</button>
      <button @click=${this.show("dos")}>Cambiar página 2</button>
      <button @click=${this.show("tres")}>Cambiar página 3</button>

      ${this.active ? this.pagesTemplate : ""}
    `;
  }

  show(pageParameter) {
    return () => {
      this.page = pageParameter;
    };
  }

  get pagesTemplate() {
    return html`
      <dile-pages attrForSelected="name" selected="${this.page}">
        <div name="uno">
          <p>Esta es la página 1</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus
            necessitatibus dolores ab facere! Asperiores sequi architecto laborum accusantium hic!
          </p>
        </div>
        <div name="dos">
          <p>Esta es la página 2</p>
          <ul>
            <li>Hola</li>
            <li>Adiós</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus
            necessitatibus dolores ab facere! Asperiores sequi architecto laborum accusantium hic!
          </p>
        </div>
        <div name="tres">
          <p>Esta es la página 3</p>
          <blockquote>Esto es un poco de contenido para hacer bulto</blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus
            necessitatibus dolores ab facere! Asperiores sequi architecto laborum accusantium hic!
          </p>
        </div>
      </dile-pages>
    `;
  }

  changeActive() {
    this.active = !this.active;
  }

  showOne() {
    this.page = "uno";
  }

  changeActiveListener(e) {
    this.active = e.detail.checked;
  }

    doSelectedChange(e) {
        this.page = e.detail.selectedPage;
    }
}
customElements.define("eit-page-switch", EitPageSwitch);
