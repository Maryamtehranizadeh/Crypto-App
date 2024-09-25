import React, { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };
    fetchData();
  }, [page]);
  return (
    <div>
      <CoinTable coins={coins} loading={loading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
