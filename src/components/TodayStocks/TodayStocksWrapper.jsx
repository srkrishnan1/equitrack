import Navigation from "../Navigations";
import TodayStockList from "./todayStockList";

import { useState } from "react";

const TodayStocksWrapper = ({ title, navList, data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClick(index) {
    setSelectedIndex(index);
  }
  return (
    <div className="todayStocksWrapper">
      <p className="todayStocksTitle">{title}</p>
      <Navigation
        data={navList}
        setSelection={selectedIndex}
        onClick={handleClick}
      />
      <TodayStockList data={data[selectedIndex]} />
    </div>
  );
};

export default TodayStocksWrapper;
