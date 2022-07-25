const components = ['App', 'Button', 'Input', 'NodesContainer', 'SearchNode', 'Select', 'TypeOfSearch'];

export const templates = {};
export const styles = {};

export const loadTemplates = () => {
    for (let component of components) {
        templates[component] = require(`./../components/${component}/${component}.html`).default;
    }
}

export const loadStyles = () => {
    for (let component of components) {
        styles[component] = require(`./../components/${component}/${component}.css`).default;
    }
}