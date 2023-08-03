import "./Header.scss";
import Logo from "../../../components/UI/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import TopRightMenu from "./TopRightMenu/TopRightMenu";
import "../Header/Header.scss";
import useWindowSize from "../../../library/hooks/useWindowSize";
const Header = ({userData}) => {
  const { width } = useWindowSize();
  return (
    <div className="top-navbar">
      <div className="navbar-custom">
        <nav className="list-item p-0">
          {/* <div className="space-virtual">
          </div> */}
          <div className={width < 992 ? "w-100pt d-flex left" : "d-flex left"}>
            {width < 992 && <Logo />}
            <SearchBar />
          </div>
          <div className={width < 992 ? "right d-none" : "right"}>
            <TopRightMenu />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
