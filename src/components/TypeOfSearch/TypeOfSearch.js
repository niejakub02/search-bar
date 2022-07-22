import { Component } from '../Base/Component.js';
import { data } from '../../helpers/loadData.js';

export class TypeOfSearch extends Component {
    mode = 'immediate';
    attribute = 'fullName';
    searchArray = [...data];
    refreshEvent = new CustomEvent("refresh", { detail: this.searchArray });
    debounceTimer = 0;
    throttlePause = 0;
    submit = false;
    queryString = '';

    constructor() {
        super();

        this.init();
    }

    search() {
        this.editSearchArray();
        this.dispatchEvent(this.refreshEvent);
    }

    isSubmit(submit) {
        this.submit = submit;
    }

    filter() {
        this.isSubmit(false);
        this.search();
    }

    editSearchArray() {
        for (let [i, chunk] of data.entries()) {
            if(!chunk[this.attribute].toLowerCase().includes(this.queryString)) {
                this.searchArray[i] = false;
            } else {
                this.searchArray[i] = true;
            }
        }
    }

    init() {
        return new Promise((resolve, reject) => {
            this.selectComponent = this.shadowRoot.querySelector('select-input');

        this.selectComponent.addEventListener("change", (e) => {
            this.attribute = e.detail;
            this.filter();
        })
        
        this.inputComponent = this.shadowRoot.querySelector('search-input');

        this.inputComponent.addEventListener("query", (e) => {
            this.queryString = e.detail;
            this.filter();
        });
        
        this.inputComponent.addEventListener("enter-query", (e) => {
            if (this.submit) {
                this.search();
                this.dispatchEvent(this.refreshEvent)
            }
        });

        let buttons = this.shadowRoot.querySelectorAll('mode-button');

        buttons.forEach(btn => {
            (btn.attributes[0].value == this.mode) ? btn.setAttribute('active', '') : btn.removeAttribute('active');
        })

        for (let button of buttons) {
            button.addEventListener('mode', (e) => {
                if (e.detail == this.mode) return;
                this.mode = e.detail;

                this.dispatchEvent(new CustomEvent("mode", { detail: {
                    mode: e.detail,
                    queryString: this.queryString,
                    attribute: this.attribute
                }}));

                this.filter();
            }); 
        }

        resolve();
        });
    }

    async connectedCallback() {
        await this.init();
        console.log('2');
    }
}