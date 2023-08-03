import "../BannerHeader/BannerHeader.scss";

const BannerHeader = ({ subject, decription }) => {
  return (
    <div className="banner-header mb-5">
      <div className="img-banner">
        <img src="/images/banner-newfeed.jpg" alt="" />
      </div>
      <div className="content">
        <h5 className="mb-0 text-white subject">{subject}</h5>
        <p className="mb-0 text-white">{decription}</p>
      </div>
    </div>
  );
};

export default BannerHeader;
