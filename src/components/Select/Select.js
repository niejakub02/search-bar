import { Component } from '../Base/Component.js';

export class Select extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.selectField = this.shadowRoot.querySelector('.Select');
        
        this.selectField.addEventListener("change", ($e) => {
            this.attribute = this.selectField.value;
            this.dispatchEvent(new CustomEvent('change', { detail: this.attribute }));
        });
    }

    setAttr(attribute) {
        this.selectField.value = attribute;
    }
}