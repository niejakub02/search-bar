const components = ['App', 'Button', 'Input', 'NodesContainer', 'SearchNode', 'Select', 'TypeOfSearch'];
export const templates = {};
export const styles = {};

export const loadTemplates = async () => {
    for (let component of components) {
        templates[component] = await loadTemplate(component);
    }
}

export const loadStyles = async () => {
    for (let component of components) {
        styles[component] = await loadStyle(component);
    }
}

async function loadTemplate(name) {
    let link = `./src/components/${name}/${name}.html`;
    return new Promise(async (resolve, reject) => {
        let html = await (await fetch(link)).text();
        resolve(html);
    });
}

async function loadStyle(name) {
    let link = `./src/components/${name}/${name}.css`;
    return new Promise(async (resolve, reject) => {
        let css = await (await fetch(link)).text();
        resolve(css);
    });
}