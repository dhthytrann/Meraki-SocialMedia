import { Link } from "react-router-dom";
import "../TabAbout/TabAbout.scss";

const TabAbout = ({ userName, birthday, gender, address }) => {
  if (birthday) {
    birthday = birthday.slice(0, 10);
  }

  return (
    <div class="tab-pane fade" id="about-tab-pane">
      <div className="row ml-0 mr-0">
        <div className="left-content tab-menu col-lg-4">
          <div className="card-tab-menu">
            <div className="title">
              <h4>About</h4>
              <Link to="/dashboard/profile#">
                <p className="mb-0">Intro My Seft</p>
              </Link>
            </div>
            <div className="list-profile list-tab-profile" id="list-profile">
              <a className="btn-scroll-item " href="#list-personal-info">
                <div className="icon">
                  <i class="fa-regular fa-user"></i>
                </div>
                <p className="mb-0">Personal Information</p>
              </a>
              <a className="btn-scroll-item" href="#list-education-work">
                <div className="icon">
                  <i class="fa-regular fa-graduation-cap"></i>
                </div>
                <p className="mb-0"> Education and Work</p>
              </a>
              <a className="btn-scroll-item" href="#list-social-network">
                <div className="icon">
                  <i class="fa-light fa-globe"></i>
                </div>
                <p className="mb-0"> Social Network</p>
              </a>
            </div>
          </div>
        </div>
        <div
          className="right-content col-lg-8"
          data-bs-spy="scroll"
          data-bs-target="#list-profile"
          data-bs-offset="0"
          tabindex="0"
        >
          <div id="list-personal-info" className="card-personal-info">
            <div className="title">
              <h5>Personal Information</h5>
            </div>
            <div className="list-personal-info-content">
              <div className="left-column">
                <div className="item">
                  <p className="mb-0">NAME</p>
                  <h5>{userName}</h5>
                </div>
                <div className="item">
                  <p className="mb-0">BIRTHDAY</p>
                  <h5>{birthday}</h5>
                </div>
              </div>
              <div className="right-column">
                <div className="item">
                  <p className="mb-0">GENDER</p>
                  <h5>{gender}</h5>
                </div>
                <div className="item">
                  <p className="mb-0">ADDRESS</p>
                  <h5>{address}</h5>
                </div>
              </div>
            </div>
          </div>
          <div id="list-education-work" className="card-education-work-info">
            <div className="title">
              <h5>Education and Work</h5>
            </div>
            <div className="list-education-work-content">
              <div className="item">
                <p className="mb-0">EMPLOYEE: </p>
                <h5>Developer in Facebook, 2023-Now</h5>
              </div>
              <div className="item">
                <p className="mb-0">UNIVERSITY: </p>
                <h5>Harvard University, 2019-2023</h5>
              </div>
              <div className="item">
                <p className="mb-0">HIGH SCHOOL: </p>
                <h5>Ardsley High School, 2015-2019</h5>
              </div>
              <div className="item">
                <p className="mb-0">SECONDARY SCHOOL: </p>
                <h5>Phillips Exeter Academy, 2013-2015</h5>
              </div>
            </div>
          </div>
          <div id="list-social-network" className="card-social-network-info">
            <div className="title">
              <h5>Social Network</h5>
            </div>
            <div className="list-social-network-content">
              <div className="left-column">
                <div className="item">
                  <p className="mb-0">FACEBOOK</p>
                  <h5>https://www.facebook.com/profile-about</h5>
                </div>
                <div className="item">
                  <p className="mb-0">GOOGLE</p>
                  <h5>https://www.google.gg/</h5>
                </div>
                <div className="item">
                  <p className="mb-0">YOUTUBE</p>
                  <h5>https://www.youtube.com/@f8</h5>
                </div>
              </div>
              <div className="right-column">
                <div className="item">
                  <p className="mb-0">INSTAGRAM</p>
                  <h5>https://www.instagram.com/about</h5>
                </div>
                <div className="item">
                  <p className="mb-0">DRIBBBLE</p>
                  <h5>https://dribbble.com/f8betmobi/about</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabAbout;
