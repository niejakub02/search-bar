import { Component } from '../Base/Component.js';

export class Button extends Component {
    static get observedAttributes() { return ['active']; }

    constructor() {
        super();

    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector('.Button');
        this.button.value = this.getAttribute('mode');
        this.button.innerText = this.getAttribute('mode');

        this.button.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent("mode", { detail: e.target.value }))
        });

        if (this.hasAttribute('active')) this.button.classList.add('Button--active');
    }

    attributeChangedCallback(attr) {
        if (attr == 'active' && this.button) this.button.classList.add('Button--active');
      }
}
