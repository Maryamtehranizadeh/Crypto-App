import { useState, useEffect } from "react";
import { searchCoin } from "../../services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setLoading(false);
      return;
    }
    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setLoading(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setLoading(true);
    search();
    return () => controller.abort();
  }, [text]);
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
      </select>
      <div className={styles.searchResult}>
        {loading && (
          <RotatingLines
            strokeWidth="2"
            strokeColor="#3874ff"
            width="50px"
            height="50px"
          />
        )}
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Search;
