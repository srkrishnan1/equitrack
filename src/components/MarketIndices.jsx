import { useSelector } from "react-redux";
import { selectAllIndices } from "../features/Slices/indicesSlice";
import LineGraphWrapper from "./LineGraphWrapper";

const MarketIndics = () => {
  const data = useSelector(selectAllIndices);

  return (
    <section className="market marketSection">
      <p className="market marketTitle">Market and Sectors</p>
      <div className="market indicesGroup">
        {data?.map((e,index) => (
          <div className={(index==data.length-1)? "marketSection index lastElement" : "marketSection index"}>
            <LineGraphWrapper
              title={e?.symbol}
              data={e?.data.map((d) => d?.Close)}
              finalPrice={e?.data[data.length - 1]?.Close}
              changePercentage={(
                ((e?.data[data?.length - 1]?.Close - e?.previousClosePrice) /
                  e?.previousClosePrice) *
                100
              )?.toFixed(2)}
              status={
                e?.data[data?.length - 1]?.Close - e?.previousClosePrice < 0
                  ? "negative"
                  : "positive"
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketIndics;
