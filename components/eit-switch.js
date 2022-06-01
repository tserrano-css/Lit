import { LitElement, html, css } from 'lit';

export class EitSwitch extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-size: 1.5em;
            }
            .on {
                color: green;
            }
            .off {
                color: red;
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
            <p class="${this.checked ? 'on' : 'off'}">switch</p>
            ${this.checked ? html`<b class="on">on</b>` : html`<b class="off">off</b>`}
        `;
    }
}
customElements.define('eit-switch', EitSwitch);
