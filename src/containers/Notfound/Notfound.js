import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../settings/constant";
import "../Notfound/Notfound.scss";

const Notfound = () => {
  return (
    <div className="page-notfound">
      <div className="img-404">
        <img src="/images/Notfound/404.png" alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h2>Page Not Found</h2>
        </div>
        <p className="mb-0">The resource requested could not be found on this server!</p>

        <Link to={HOME_PAGE} replace={false} className="btn-go-home mt-3">
          <p className="mb-0 mt-0">Go Home</p>
        </Link>
      
      </div>
    </div>
  );
};

export default Notfound;
