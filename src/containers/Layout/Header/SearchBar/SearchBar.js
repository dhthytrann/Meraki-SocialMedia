import { useEffect, useState } from "react";
import "../SearchBar/SearchBar.scss";
import OutsideClickHandler from "react-outside-click-handler";
import SearchForm from "./SearchForm/SearchForm";
import SearchResultBox from "./SearchResultBox/SearchResultBox";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../../../redux/slice/User/userSlice";
import { KeyWordContext } from "./Context/keyWordContext";

const SearchBar = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };


  const [keyWord, setKeyWord] = useState("");

  return (
    <KeyWordContext.Provider value={[keyWord, setKeyWord]}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setDropdown(false);
        }}
      >
        <div className="search-bar">
          <div
            onClick={() => {
              handleDropdown();
            }}
          >
            <SearchForm />
          </div>
          {dropdown && <SearchResultBox />}
        </div>
      </OutsideClickHandler>
    </KeyWordContext.Provider>
  );
};

export default SearchBar;
