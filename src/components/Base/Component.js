import { templates, styles } from "../../helpers/loadStaticFiles.js";

export class Component extends HTMLElement {
    constructor() {
        super();

        this.render(this.constructor.name);
    }

    render(name) {
        this.container = this.createContainer(name);
        let style = this.createStyle(name);
        this.container.appendChild(style);
        if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.container);
    }

    append(element) {
        this.container.appendChild(element);
    }

    remove() {
        this.container.remove();
    }

    createContainer(name) {
        let container = document.createElement('div');
        container.classList.add('Container');
        container.innerHTML = templates[name];
        return container;
    }

    createStyle(name) {
        let style = document.createElement('style');
        style.innerHTML = styles[name];
        return style;
    }
}