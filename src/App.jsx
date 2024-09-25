import { useSelector } from "react-redux";
import Header from "./components/Header";
import { selectAllIndices } from "./features/Slices/indicesSlice";

import {
  useGetIndexDataQuery,
  useGetTopGainersQuery,
  useGetTopLosersQuery,
  useGetMostactiveQuery,
} from "./features/api/apiSlice";
import Hero from "./components/Hero";
import MarketIndics from "./components/MarketIndices";
import { marketIndices } from "./Config";
import EmptyPortfolioWrapper from "./components/Portfolio/EmptyPortfolioWrapper";
import PortfolioWrapper from "./components/Portfolio/PortfolioWrapper";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import IndexPage from "./Pages/IndexPage";
import { selectGainers } from "./features/Slices/topGainersSlice";

function App() {
  const indexData = marketIndices.map((index) => {
    return useGetIndexDataQuery(index);
  });
  useGetTopGainersQuery();
  useGetTopLosersQuery();
  useGetMostactiveQuery();

  console.log(useSelector(selectGainers));

  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
