import { loadStyles, loadTemplates } from './src/helpers/loadStaticFiles.js';

import { App } from './src/components/App/App.js'
import { NodesContainer } from './src/components/NodesContainer/NodesContainer.js';
import { SearchNode } from './src/components/SearchNode/SearchNode.js';
import { Input } from './src/components/Input/Input.js';
import { Select } from './src/components/Select/Select.js';
import { TypeOfSearch } from './src/components/TypeOfSearch/TypeOfSearch.js'
import { Button } from './src/components/Button/Button.js';

(async () => {
    await loadTemplates();
    await loadStyles();

    customElements.define('app-root', App);
    customElements.define('search-node', SearchNode);
    customElements.define('nodes-container', NodesContainer);
    customElements.define('search-input', Input);
    customElements.define('select-input', Select);
    customElements.define('type-of-search', TypeOfSearch);
    customElements.define('mode-button', Button);
})();