import { LitElement, html, css } from 'lit';

export class EitClock extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                color: red;
            }
        `
    ];

    firstUpdated() {  
        this.interval = setInterval(() => {
            this.requestUpdate();
        }, 1000);  
    }

    disconnectedCallback() {
        clearInterval(this.interval);
    }

    render() {
        return html`
            <div class="clock">${this.getClock()}</div>
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
