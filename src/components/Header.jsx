import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function onClick() {
  document.getElementById("searchInput").focus();
}

const debouncedFunc = Debounce();
function onChange(e) {
  debouncedFunc(e.target.value);
}

function Debounce() {
  let timer;
  return function (value) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => console.log(value), 1000);
  };
}

const Header = () => {
  return (
    <nav className="header headerWrapper">
      <div className="header headerContent rightContent">
        <Logo />
        <SearchBar onChange={onChange} onClick={onClick} />
      </div>

      <Profile />
    </nav>
  );
};

export default Header;
