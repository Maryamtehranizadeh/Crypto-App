import React from "react";

function CoinTable({ coins }) {
  return (
    <div>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoinTable;
