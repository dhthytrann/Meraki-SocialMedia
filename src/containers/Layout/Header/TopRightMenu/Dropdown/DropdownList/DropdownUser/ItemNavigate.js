import { Link } from "react-router-dom";
import "../DropdownUser/ItemNavigate.scss"

const ItemNavigate = ({ iconImg, menuTitle, description, navigate }) => {
  return (
    <Link to={navigate} className="text-decoration-none">
      <div className="item-navigate">
        <div className="sub-card sub-card-big d-flex align-items-center justify-content-between">
          <div className="media info-user">
            <div className="ic-navigate rounded">
              <img className="" src={iconImg} alt="" />
            </div>
            <div className="content-navigate media-body ml-3">
              <h6 class="mb-0 ">{menuTitle}</h6>
              <p class="mb-0 font-size-12 ">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemNavigate;
