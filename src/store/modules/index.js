const thisStore = require.context('.', true, /Store$/);
const modules = {};
thisStore.keys().map(key => {
  const Store = thisStore(key).default;
  modules[Store.name] = Store;
});

const pageStore = require.context('../../pages', true, /store$/);

pageStore.keys().map(key => {
  const Store = pageStore(key).default;
  modules[Store.name] = Store;
});

export default modules
