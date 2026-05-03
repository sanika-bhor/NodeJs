const NodeCache = require("node-cache");

// TTL = 60 seconds
const cache = new NodeCache({ stdTTL: 60 });

const getCache = (key) => {
  return cache.get(key);
};

const setCache = (key, value) => {
  cache.set(key, value);
};

const deleteCache = (key) => {
  cache.del(key);
};

const clearCache = () => {
  cache.flushAll();
};

module.exports = {
  getCache,
  setCache,
  deleteCache,
  clearCache,
};
