const Base_URL = "https://api.coingecko.com/api/v3";
// https://api.coingecko.com/api/v3/search
// https://api.coingecko.com/api/v3/search?query=btc
const API_Key = "&x_cg_demo_api_key=CG-y32hZw8q21UErccY9GcM9sRH";

const getCoinList = (page, currency) => {
  return `${Base_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}${API_Key}`;
};

const searchCoin = (query) => {
  return `${Base_URL}/search?query=${query}${API_Key}`;
};

const marketChart = (coin) => {
  return `${Base_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};
export { getCoinList, searchCoin, marketChart };
