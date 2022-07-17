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
  }

  render() {
    return html`
      <eit-page-links
        .pages=${this.orderTypes}
        selectedPage="${this.selectedOrder}"
        @eit-page-links-change=${this.changeSelectedOrder}
      ></eit-page-links>
      ${this.doOrder(this.selectedOrder).map((user) => html`
        <eit-user .user="${user}"></eit-user> 
    `)}
    `;
  }

  doOrder(order){
    const usersOrdered = users.sort((a, b) => {
        if(order == "asc"){
            return a.name.localeCompare(b.name);
        }else{
            return b.name.localeCompare(a.name);
        }
    });
    return usersOrdered; //con esto se crea una copia de usersOrdered y cambia la referencia y se actualiza el template
  }

    changeSelectedOrder(event) {
        this.selectedOrder = event.detail.selectedPage;
    }
}
customElements.define("eit-user-list", EitUserList);
