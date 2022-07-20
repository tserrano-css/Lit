import { LitElement, html, css } from 'lit';
import { repeat } from "lit/directives/repeat.js";
import { EitUserList } from "./eit-user-list";

export class EitUserListOptimized extends EitUserList {

  // render() {
  //   return [
  //       super.render(), 
  //       this.footerTemplate,
  //       html``
  //     ]; //super.render() es el metodo render de la clase padre y devolvemos un array de templates
  // }

    //Tambien podria ser
  render() {
    return html`
      ${super.render()}
      ${this.footerTemplate}
    `;
  }

  //Redefinimos el metodo mapRepeat de la clase UserList para optimizar el rendimiento
  get mapRepeatTemplate() {
    return html`
      ${repeat(
        this.ordererUsers,
        (user) => user.id,
        (user, index) => html` <eit-user .user="${user}"></eit-user> `
      )}
      <!-- ${this.footerTemplate} -->
    `;
  }

  get footerTemplate() {
    return html`
      <footer>Hemos listado ${this.ordererUsers.length} usuarios</footer>
    `;
  }
}
customElements.define('eit-user-list-optimized', EitUserListOptimized);
