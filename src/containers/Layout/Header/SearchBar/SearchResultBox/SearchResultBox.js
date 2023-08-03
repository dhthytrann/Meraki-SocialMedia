import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "../SearchResultBox/SearchResultBox.scss";
import ItemSuggestion from "./SuggestionItem/ItemSuggestion";
import "../SearchResultBox/SuggestionItem/ItemSuggestion.scss";
import SearchItem from "./SearchItem/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../../redux/slice/User/userSlice";
import { KeyWordContext } from "../Context/keyWordContext";
import { DataContext } from "../../../../../context/dataContext";
import { Empty } from "antd";

const SearchResultBox = () => {
  const friendNumber = "10";

  //Neu la ban be la true
  const friendState = true;

  // const { userData, allUserData, setAllUserData } = useContext(DataContext);

  const userData = useSelector((state) => state.user?.currentUser);
  const allUserData = useSelector((state) => state.user?.listAllUser);

  const [keyWord, setKeyWord] = useContext(KeyWordContext);

  const handleSearch = allUserData.filter(
    (val) =>
      val.firstName.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()) &&
      val.role === "USER" &&
      val.id != userData?.id
  );

  const searchResult = [...handleSearch];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <div className="sub-dropdown search-box-dropdown">
      <div className="card">
        <div className="card-body">
          <div className="search-result">
            <div className="title">
              <h5>Search Results</h5>
            </div>
            <div className="list-result">
              {searchResult ? (
                searchResult.map((user) => {
                  return (
                    <SearchItem
                      key={user.id}
                      idUser={user.id}
                      imgUser={user?.avatarLink?.imgLink}
                      email={user?.email}
                      userName={user?.firstName + user?.lastName}
                      friendNumber={friendNumber}
                      friendState={friendState}
                    />
                  );
                })
              ) : (
                <Empty />
              )}
            </div>
          </div>
          {/* <div className="suggestion">
            <div className="title">
              <h5>Suggestion For You</h5>
            </div>
            <div className="list-suggestion">
              <Carousel showArrows={false} itemsToShow={5} pagination={false}>
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
              </Carousel>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchResultBox;
