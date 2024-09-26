import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableRow.module.css";
import { marketChart } from "../../services/cryptoApi";

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    image,
    name,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(coin.id));
      const json = await res.json();
      setChart({ ...json, coin});
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr className={styles.tr}>
      <td>
        <div className={styles.symbole} onClick={showHandler}>
          <img src={coin.image} alt="Image" />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{coin.name}</td>
      <td>
        {currency === "eur" && <span>€</span>}
        {currency === "usd" && <span>$</span>}
        {currency === "jpy" && <span>¥</span>}

        {coin.current_price.toLocaleString()}
      </td>
      <td
        className={
          coin.price_change_percentage_24h >= 0 ? styles.success : styles.error
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>
        <img
          src={coin.price_change_percentage_24h >= 0 ? chartUp : chartDown}
          alt={coin.name}
        />
      </td>
    </tr>
  );
}

export default TableRow;
