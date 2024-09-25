
const Navigation = ({ data, setSelection, onClick }) => {
  return (
    <nav className="nav navWrapper">
      {data.map((e, index) => (
        <button
          className={index == setSelection ? "selected navItems easeAnimation" : "navItems easeAnimation"}
          onClick={() => onClick(index)}
        >
          {e.icon}
          {e.name}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
