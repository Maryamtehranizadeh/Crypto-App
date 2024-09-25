import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableRow.module.css";

function TableRow({ coin, currency }) {
  return (
    <tr className={styles.tr}>
      <td>
        <div className={styles.symbole}>
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
