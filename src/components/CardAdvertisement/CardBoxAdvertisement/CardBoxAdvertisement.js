import "../CardBoxAdvertisement/CardBoxAdvertisement.scss";

const CardBoxAdvertisement = () => {
  return (
    <div className="card-box-advertisement">
      <div className="img-advertisement">
        <img src="/images/advertisement/banner.png" alt="" />
      </div>
      <div className="content">
        <div className="img-logo">
          <img src="/images/logo-full.png" alt="" />
        </div>
        <div className="title-advertisement">
          <p>Feel free to reach us anytime. we are avaliable 24 hours</p>
        </div>
        <div className="btn-contact">
          <p className="mb-0">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default CardBoxAdvertisement;
