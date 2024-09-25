import Hero from "../components/Hero";
import MarketIndics from "../components/MarketIndices";
import PortfolioWrapper from "../components/Portfolio/PortfolioWrapper";
import StocksAndMFIndexSection from "../components/StocksAndMutualFundIndexPageSection";
import TodayStocksWrapper from "../components/TodayStocks/TodayStocksWrapper";

const IndexPage = () => {
  return (
    <div className="page IndexPage">
      <Hero />
      <div className="subHeader">
        <MarketIndics />
        <PortfolioWrapper />
       <StocksAndMFIndexSection />
      </div>
    </div>
  );
};

export default IndexPage;
