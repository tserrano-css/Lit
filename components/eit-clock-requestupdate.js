import { LitElement, html, css } from 'lit';

export class EitClock extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            hour: { type: String },
        };
    }

    constructor() {
        super();
        this.hour = '';
    }

    firstUpdated() {  
        this.interval = setInterval(() => {
            this.hour = this.getClock();
        }, 1000);  
    }

    disconnectedCallback() {
        clearInterval(this.interval);
    }

    render() {
        return html`
            <div class="clock">${this.hour}</div>
        `;
    }

    getClock() {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }
}
customElements.define('eit-clock', EitClock);
