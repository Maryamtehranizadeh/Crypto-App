import React, { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
      {!coins.length && <h1>Loading....Please wait</h1>}
      <CoinTable coins={coins} />
    </div>
  );
}

export default HomePage;
