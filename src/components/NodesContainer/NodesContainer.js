import { Component } from '../Base/Component.js';
import { data } from '../../helpers/loadData.js';

export class NodesContainer extends Component {
    searchNodes = [];

    constructor() {
        super();
    }

    refresh(array) {
        for (let i in array) {
            (array[i]) ? this.searchNodes[i].classList.remove('Card--hide') : this.searchNodes[i].classList.add('Card--hide');
        }
    }

    generateNodes() {
        for (let chunk of data) {
            let node = document.createElement('search-node');
            
            node.innerHTML = `
                <span slot="full_name">${chunk.fullName}</span>
                <span slot="nationality">${chunk.nationality}</span>
                <span slot="occupation">${chunk.occupation}</span>
                <span slot="born">${chunk.lived.born}</span>
                <span slot="deceased">${chunk.lived.deceased}</span>
                <span slot="work">${chunk.mostKnownWork}</span>
            `;

            node.setAttribute('img', chunk.img);
            this.searchNodes.push(node);
            this.append(node);
        }
    }

    connectedCallback() {
        this.generateNodes();
    }
}