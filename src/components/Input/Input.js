import { Component } from '../Base/Component.js';

export class Input extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.inputField = this.shadowRoot.querySelector('.Input');
        this.inputField.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.dispatchEvent(new CustomEvent('enter-query', { detail: this.inputField.value.toLowerCase() }));  
            } else {
                this.dispatchEvent(new CustomEvent('query', { detail: this.inputField.value.toLowerCase() }));
            }
        });
    }

    setQueryString(queryString) {
        this.inputField.value = queryString;
    }
}