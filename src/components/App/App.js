import { Component } from '../Base/Component.js';
import { debounce, throttle } from '../../helpers/searchModes.js';

export class App extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.searchComponent = this.shadowRoot.querySelector("type-of-search");

        this.nodesContainer = this.shadowRoot.querySelector("nodes-container");

        this.searchComponent.addEventListener("refresh", (e) => {
            this.nodesContainer.refresh(e.detail);
        });

        this.searchComponent.addEventListener("mode", (e) => {
            this.renderType(e.detail.mode);
            this.searchComponent.inputComponent.setQueryString(e.detail.queryString);
            this.searchComponent.selectComponent.setAttr(e.detail.attribute);
            this.searchComponent.filter();
        });
    }

    renderType(mode) {
        this.searchComponent.remove();
        this.searchComponent.render("TypeOfSearch");
        
        switch(mode) {
            case 'immediate':
                this.searchComponent.isSubmit(false);
                this.searchComponent.filter = () => {
                    this.searchComponent.search();
                }
            break;

            case 'submit':
                this.searchComponent.isSubmit(true);
                this.searchComponent.filter = () => {}
            break;

            case 'throttle':
                this.searchComponent.isSubmit(false);
                this.searchComponent.filter = () => {
                    throttle(
                        () => { 
                            this.searchComponent.search();
                        },
                        250, this.searchComponent.throttlePause);
                }
            break;

            case 'debounce':
                this.searchComponent.isSubmit(false);
                this.searchComponent.filter = () => {
                    debounce(
                        () => { 
                            this.searchComponent.search();
                        },
                        1000, this.searchComponent.debounceTimer);
                }
            break;

            default:

            break;
        }

        this.searchComponent.init();
    }
}
