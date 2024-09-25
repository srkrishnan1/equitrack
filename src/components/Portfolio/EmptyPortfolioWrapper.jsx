import ImageWrapper from "../../assets/banner.png";
const EmptyPortfolioWrapper = () => {
  return (
    <div className="emptyPortfolioWrapper container">
      <img
        className="imageWrapper"
        src={ImageWrapper}
        alt="Add your portfolio to track your portfolio performance"
      />
    </div>
  );
};

export default EmptyPortfolioWrapper;
