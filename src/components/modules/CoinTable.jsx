import React from "react";

import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";
import styles from "./CoinTable.module.css";

function CoinTable({ coins, loading, currency, setChart }) {
  return (
    <div className={styles.container}>
      {loading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Empty</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CoinTable;
