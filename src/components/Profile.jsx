import example from "../assets/react.svg";
import Avatar from "./Avatar";
import { IoChevronDownOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="profile profileWrapper">
      <Avatar imageUrl={example} />
    </div>
  );
};

export default Profile;
