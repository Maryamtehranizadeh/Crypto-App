import React, { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CoinTable coins={coins} loading={loading} />
    </div>
  );
}

export default HomePage;
