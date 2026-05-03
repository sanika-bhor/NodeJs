const { getCache, setCache } = require("./cacheService");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// 🔹 Get all users (with caching)
const getUsers = async () => {
  const cacheKey = "users";

  const cached = getCache(cacheKey);
  if (cached) {
    console.log("✅ Cache HIT");
    return cached;
  }

  console.log("❌ Cache MISS - Fetching API");

  const response = await fetch(API_URL);
  const data = await response.json();

  setCache(cacheKey, data);

  return data;
};

// 🔹 Get user by ID (using cached data)
const getUserById = async (id) => {
  const users = await getUsers(); // uses cache
  return users.find((u) => u.id == id);
};

// 🔹 Filter users (example reuse)
const getUsersByCity = async (city) => {
  const users = await getUsers();

  return users.filter(
    (u) => u.address.city.toLowerCase() === city.toLowerCase(),
  );
};

module.exports = {
  getUsers,
  getUserById,
  getUsersByCity,
};
