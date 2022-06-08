import { LitElement, html, css } from 'lit';

export class EitShowClick extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
      return {
          clientX: { type: Number },
          clientY: { type: Number },
      };
  }

    constructor() { 
        super();
        this.clientX = 0;
        this.clientY = 0;
        this.clickHandler = this.showClickPosition.bind(this);
        console.log(this.clientX, this.clientY);
    }

  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback ejecutado...");
    //manera 1
    //document.addEventListener("click", (e) => {this.showClickPosition(e)});
    //manera 2
    document.addEventListener("click", this.clickHandler);
  }

  firstUpdated() {
    console.log("firstUpdated ejecutado...", this.clientX, this.clientY);
    console.log(this.shadowRoot.getElementById("elinput"));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log("disconnectedCallback ejecutado...");
    document.removeEventListener("click", this.clickHandler);
  }

  render() {
    return html` 
        <p>Han hecho clic en ${this.clientX} x ${this.clientY}</p>
        <p>input: <input id="elinput" type="text" value="${this.clientX}"/></p>    
    `;
  }

  showClickPosition(e) {
    this.clientX = e.clientX;
    this.clientY = e.clientY;
  }
}
customElements.define('eit-show-click', EitShowClick);
