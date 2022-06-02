import { LitElement, html, css } from 'lit';

export class EitProp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            propString: { type: String },
            propNumber: { type: Number },
        };
    }

    render() {
        return html`
            <p>Propiedad string: ${this.propString} ${typeof this.propString}</p>
            <p>Propiedad number: ${this.propNumber} ${typeof this.propNumber}</p>
        `;
    }
}
customElements.define('eit-prop', EitProp);
