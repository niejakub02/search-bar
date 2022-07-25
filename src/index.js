import { loadStyles, loadTemplates } from './helpers/loadStaticFiles.js';

import { App } from './components/App/App.js';
import { NodesContainer } from './components/NodesContainer/NodesContainer.js';
import { SearchNode } from './components/SearchNode/SearchNode.js';
import { Input } from './components/Input/Input.js';
import { Select } from './components/Select/Select.js';
import { TypeOfSearch } from './components/TypeOfSearch/TypeOfSearch.js'
import { Button } from './components/Button/Button.js';


(() => {
    loadTemplates();
    loadStyles();

    customElements.define('app-root', App);
    customElements.define('search-node', SearchNode);
    customElements.define('nodes-container', NodesContainer);
    customElements.define('search-input', Input);
    customElements.define('select-input', Select);
    customElements.define('type-of-search', TypeOfSearch);
    customElements.define('mode-button', Button);
})();