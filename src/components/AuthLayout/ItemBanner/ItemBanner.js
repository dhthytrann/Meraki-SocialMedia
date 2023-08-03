
import "../ItemBanner/ItemBanner.scss";

const ItemBanner = ({imgBanner,title, decription}) => {
  return (
    <div className="item">
      <div className="item-img mb-3">
        <img src={imgBanner} alt="" className="img-fluid" />
      </div>
      <div className="title">
        <p className=" subject mb-1 text-white">{title}</p>
        <p className="mb-0 text-white">
          {decription}
        </p>
      </div>
    </div>
  );
};
export default ItemBanner;
