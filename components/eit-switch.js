import { LitElement, html, css } from 'lit';

export class EitSwitch extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-size: 1.5em;
                color: red;
            }
            :host([checked]) {
                color: green;
            }
        `
    ];

    static properties = {
        checked: { type: Boolean, reflect: true }
    }

    constructor() {     
        super();
        this.checked = false;
    }

    render() {
        return html`
            ${this.checked ? html`<b>on</b>` : html`<b>off</b>`}
        `;
    }
}
customElements.define('eit-switch', EitSwitch);
