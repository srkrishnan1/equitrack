import { IoSearchOutline } from "react-icons/io5";
const SearchBar = ({ onChange, onClick }) => {
  return (
    <div className="searchBar" tabIndex="0" onClick={onClick}>
      <IoSearchOutline className="icon searchIcon" />
      <label
        id="searchLabel"
        htmlFor="searchInput"
        aria-label="Search Stocks, Mutualfunds, ETF"
      />
      <input
        type="text"
        placeholder="Search Stocks, Mutualfunds, ETF"
        id="searchInput"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
