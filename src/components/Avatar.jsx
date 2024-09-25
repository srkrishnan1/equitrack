const Avatar = ({ imageUrl }) => {
  return (
    <div className="avatarWrapper avatar">
      <img src={imageUrl} className="avatar avatarImg" />
    </div>
  );
};

export default Avatar;
