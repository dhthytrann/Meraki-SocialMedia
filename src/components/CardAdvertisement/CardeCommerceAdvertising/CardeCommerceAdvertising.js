import "../CardeCommerceAdvertising/CardeCommerceAdvertising.scss";

const CardeCommerceAdvertising = () => {
  return (
    <div className="card-e-commerce-advertising">
      <div className="title">
        <h5>Advertisement</h5>
      </div>
      <div className="list-product">
        <div className="item-product">
          <div className="img-product">
            <img src="/images/advertisement/product-01.jpg" alt="" />
          </div>
          <div className="content">
            <div className="product-name">
              <h6>Raw, Organic Kombucha </h6>
            </div>
            <div className="product-link">
              <p>brewdrkombucha.com</p>
            </div>
          </div>
        </div>
        <div className="item-product">
          <div className="img-product">
            <img src="/images/advertisement/product-02.jpg" alt="" />
          </div>
          <div className="content">
            <div className="product-name">
              <h6>Allerdefense Essence </h6>
            </div>
            <div className="product-link">
              <p>dprogramvietnam.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardeCommerceAdvertising;
