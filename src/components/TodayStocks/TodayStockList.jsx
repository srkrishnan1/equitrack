import { IoCaretDownCircle } from "react-icons/io5";
import { IoCaretUpCircle } from "react-icons/io5";
import PlaceHolder from "../placeHolder/PlaceHolder";
const TodayStockList = ({ data: points }) => {
  console.log(points);

  return (
    <div className="stockList stockListWrapper">
      <p className="stockListHeader stockListName">STOCKS</p>
      <p className="stockListHeader stockListPrice">PRICE</p>
      <p className="stockListHeader stockListChange">CHANGE</p>
      {points?.map((e) => (
        <>
          <div className="stockListBody stockListName">
            {<PlaceHolder size="md" placeholderText={e?.data.symbol[0]} />}
            <div className="companyDetailsWrapper">
              <p className="companySymbol">{e?.data.symbol}</p>
              <p className="companyName truncate">{e?.data?.company_name}</p>
            </div>
          </div>
          <p className="stockListBody stockListPrice">
            ₹{Number(e?.data?.last_price)?.toFixed(2)}
          </p>
          <p className="stockListBody stockListChange">
            {e?.data?.change_percentage < 0 ? (
              <IoCaretDownCircle className="negativeBg" />
            ) : (
              <IoCaretUpCircle className="positiveBg" />
            )}
            {e?.data?.change_percentage?.toFixed(2)}
          </p>
        </>
      ))}
    </div>
  );
};

export default TodayStockList;
