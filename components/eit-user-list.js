import { LitElement, html, css } from "lit";
import "./eit-user.js";
import "./eit-page-links.js";
import { users } from "../users.js";

export class EitUserList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  // con un fetch
  static get properties() {
    return {
      orderTypes: { type: Array },
      selectedOrder: { type: String },
      ordererUsers: { type: Array },
      // users: { type: Array },
    };
  }

  constructor() {
    super();
    this.orderTypes = ["asc", "desc"];
    this.selectedOrder = "asc";
    // this.users = [];
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.users =users);

    this.times = 0;
    //para no perder tiempo en la ordenación, cacheamos los datos en dos nuevos arrays ya ordenados
    //no son propiedades reactivas, son propiedades de clase
    this.usersAsc = [
      ...users.sort((a, b) => {
        if (a.name === b.name) {
          return 0;
        }
        return a.name > b.name ? 1 : -1;
      }),
    ];
    this.usersDesc = [
      ...users.sort((a, b) => {
        if (a.name === b.name) {
          return 0;
        }
        return a.name < b.name ? 1 : -1;
      }),
    ];
    this.ordererUsers = this.usersAsc;
  }

  change100Times() {
    if (this.times === 0) {
      this.timeStart = performance.now(); //milisegundos de la hora actual
    }
    if (this.times < 100) {
      this.times++;
      this.ordererUsers = this.times % 2 === 0 ? this.usersAsc : this.usersDesc;
      this.updateComplete.then(() => this.change100Times());
    } else {
      this.timeEnd = performance.now();
      console.log(`Tiempo de ejecución: ${this.timeEnd - this.timeStart} ms`);
      this.times = 0;
    }
  }

  render() {
    return html`
      <button @click=${this.change100Times}>100</button>

      <eit-page-links
        .pages=${this.orderTypes}
        selectedPage="${this.selectedOrder}"
        @eit-page-links-change=${this.changeSelectedOrder}
      ></eit-page-links>

      ${this.mapRepeatTemplate}
    `;
  }

  get mapRepeatTemplate() {
    return html`
      ${this.ordererUsers.map((user) => html` 
        <eit-user .user="${user}"></eit-user> 
      `)}
    `;
  }

  doOrder(order) {
    const usersOrdered = users.sort((a, b) => {
      if (order == "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return usersOrdered; //con esto se crea una copia de usersOrdered y cambia la referencia y se actualiza el template
  }

  changeSelectedOrder(event) {
    this.selectedOrder = event.detail.selectedPage;
    if (this.selectedOrder === "asc") {
      this.ordererUsers = this.usersAsc;
    } else {
      this.ordererUsers = this.usersDesc;
    }
  }
}
customElements.define("eit-user-list", EitUserList);
