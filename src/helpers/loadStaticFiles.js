const components = ['App', 'Button', 'Input', 'NodesContainer', 'SearchNode', 'Select', 'TypeOfSearch'];

import { data } from './loadData.js';

export const templates = {};
export const styles = {};

export const loadTemplates = async () => {
    for (let component of components) {
        templates[component] = await require(`./../components/${component}/${component}.html`).default;
    }
}

export const loadStyles = async () => {
    for (let component of components) {
        styles[component] = await require(`./../components/${component}/${component}.css`).default;
    }
}