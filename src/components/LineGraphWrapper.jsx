import LineGraph from "./LineGraph";
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { indexMapping } from "../Config";

const LineGraphWrapper = ({
  title,
  data,
  status,
  finalPrice,
  changePercentage,
}) => {
  const styleConfig = {};

  return (
    <div className="lineGraph lineGraphWrapper">
      <p className="lineGraph lineGraphTitle">{indexMapping[title]}</p>
      <LineGraph points={data} status={status} styleConfig={styleConfig} />
      <div className="lineGraph lineGraphRightContent">
        <p className="lineGraph lineGraphPrice">{finalPrice?.toFixed(2)}</p>
        <div className="lineGraph lineGraphPercentWrapper">
          {status == "positive" ? (
            <FaCaretUp className="icons lineGraph upIcon" />
          ) : (
            <FaCaretDown className="icons lineGraph downIcon" />
          )}
          <p className="lineGraph lineGraphPercent">{changePercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default LineGraphWrapper;
