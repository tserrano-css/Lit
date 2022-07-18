import { LitElement, html, css } from 'lit';
import { repeat } from "lit/directives/repeat.js";
import { EitUserList } from "./eit-user-list";

export class EitUserListOptimized extends EitUserList {
  //Redefinimos el metodo mapRepeat de la clase UserList para optimizar el rendimiento
  get mapRepeatTemplate() {
    return html`
      ${repeat(
        this.ordererUsers,
        (user) => user.id,
        (user, index) => html` <eit-user .user="${user}"></eit-user> `
      )}
    `;
  }
}
customElements.define('eit-user-list-optimized', EitUserListOptimized);
