import { Outlet } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import ItemBanner from "../components/AuthLayout/ItemBanner/ItemBanner";

const AuthLayout = () => {
  return (
    <div className="border-auth-layout">
      <div className="auth-layout">
        <div className="banner d-none d-xl-block ">
          <div className="animate-circle">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>
            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>
          <div className="banner-img ">
            <div className="logo">
              <div className="img-logo">
                <img src="/images/logo-white.png" class="img-fluid" alt="" />
              </div>
              <span className="logo-title">Meraki</span>
            </div>
            <Carousel
              className="list-banner-img"
              itemsToShow={1}
              pagination={true}
              showArrows={false}
              focusOnSelect={false}
              enableMouseSwipe={false}
              enableAutoPlay={true}
              autoPlaySpeed={2000}
              enableSwipe={true}
            >
              <ItemBanner
                imgBanner={"/images/login/banner-01.png"}
                title={"Connect With The World"}
                decription={
                  "It is a long established fact that a reader will be distracted by the readable content."
                }
              />
              <ItemBanner
                imgBanner={"/images/login/banner-02.png"}
                title={"Together Is Better"}
                decription={
                  "It is a long established fact that a reader will be distracted by the readable content."
                }
              />
              <ItemBanner
                imgBanner={"/images/login/banner-03.jpg"}
                title={"Power UP Your Friendship"}
                decription={
                  "It is a long established fact that a reader will be distracted by the readable content."
                }
              />
            </Carousel>
          </div>
        </div>
        <div className="auth-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
