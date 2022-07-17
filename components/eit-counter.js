import { LitElement, html, css } from 'lit';
import { WiredButton } from "wired-elements/lib/wired-button.js";
import { WiredCard } from "wired-elements/lib/wired-card.js";
import { WiredInput } from "wired-elements/lib/wired-input.js";
import { WiredSlider } from "wired-elements/lib/wired-slider.js";
import "@dile/dile-input/dile-input";

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
      h2 {
        color: red;
      }
      .parrafo {
        color: blue;
        font-size: 1.5rem;
      }
      wired-input {
        width: 100px;
        font-size: 1em;
        padding: 0.5em;
      }
      wired-button {
        background-color: #8cf;
      }
      wired-button.decrement {
        background-color: #fcc;
      }
      wired-card {
        margin: 1em;
        padding: 1em;
      }
    `,
  ];

  static properties = {
    counter: {
      type: Number,
      reflect: true,
      /*
      hasChanged: (newValue, oldValue) => {
        //refresca el contador solo para multiples de 5
        return newValue % 5 === 0;
      }*/
    },
    quantity: { type: Number },
  };

  constructor() {
    super();
    this.counter = 0;
    this.quantity = 10;
  }

  updated(changedProperties) {
    console.log("updated ejecutado...");
  }

  render() {
    return html`
      <wired-card elevation="3">
        <h2>EIT Counter</h2>
        <p class="parrafo">${this.counter}</p>
        <p>
          <wired-input id="quantity" type="number" .value="${this.quantity}"></wired-input>
          <dile-input label="The label" placeholder="Write something..."></dile-input>
        </p>
        <p>
          <wired-slider value="10" min="1" max="20" @change="${this.doChangeQuantity}">
          </wired-slider>
        </p>
        <wired-button @click="${this.increment}">+</wired-button>
        <wired-button @click="${this.decrement}" class="decrement">-</wired-button>
      </wired-card>
    `;
  }

  //get quantity() {
  //  return this.shadowRoot.getElementById("quantity").value;
  //}

  doChangeQuantity(event) {
    this.quantity = event.detail.value;
  }

  increment() {
    //let quantity = this.shadowRoot.getElementById('quantity').value;
    this.counter += parseInt(this.quantity);
  }

  decrement() {
    this.counter -= parseInt(this.quantity);
  }
}
customElements.define('eit-counter', EitCounter);
