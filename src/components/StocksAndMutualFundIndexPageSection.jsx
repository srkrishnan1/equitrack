import TodayStocksWrapper from "./TodayStocks/TodayStocksWrapper";
import { useSelector } from "react-redux";
import { selectGainers } from "../features/Slices/topGainersSlice";
import { selectLosers } from "../features/Slices/topLosersSlice";
import { selectMostactive } from "../features/Slices/mostactive";
import { IoCaretUpCircle } from "react-icons/io5";
import { IoCaretDownCircle } from "react-icons/io5";
import { FaFireFlameCurved } from "react-icons/fa6";
const StocksAndMFIndexSection = () => {
  const todayStocks = [
    useSelector(selectGainers),
    useSelector(selectLosers),
    useSelector(selectMostactive),
  ];
  const todayStocksNavList = [
    { name: "Top Gainers", icon: <IoCaretUpCircle className="positiveBg" /> },
    { name: "Top Losers", icon: <IoCaretDownCircle className="negativeBg" /> },
    { name: "Most Active", icon: <FaFireFlameCurved className="trendBg" /> },
  ];

  return (
    <div className="stocksAndMFIndexSection">
        <div className="stockAndMFList">
      <TodayStocksWrapper title={"Today's Market"} data={todayStocks} navList={todayStocksNavList} />
      <TodayStocksWrapper title={"Mutual Funds and ETFs"} data={todayStocks} navList={todayStocksNavList} />
      </div>
      <div></div>
    </div>
  );
};

export default StocksAndMFIndexSection;
