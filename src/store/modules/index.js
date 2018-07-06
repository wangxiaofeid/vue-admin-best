const req = require.context('.', true, /Store$/);
const modules = {};
req.keys().map(key => {
  const Store = req(key).default;
  modules[Store.name] = Store;
});

export default modules
