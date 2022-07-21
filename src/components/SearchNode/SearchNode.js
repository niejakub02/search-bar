import { Component } from '../Base/Component.js';

export class SearchNode extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.insertImage();
    }

    insertImage() {
        let img = this.shadowRoot.querySelector('.Card__img');
        let link = this.getAttribute('img');
        img.src = require(`./../../assets/${link}`);
    }

}