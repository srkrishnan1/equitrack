import logo from "../assets/Logo.svg";
const Logo = () => {
  return (
    <div className="logo logoWrapper">
      <img src={logo} className="logo logoImg" alt="logo" />
      <p className="logo logoTitle">EquiTrack</p>
    </div>
  );
};

export default Logo;
