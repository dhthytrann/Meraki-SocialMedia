import { useContext } from "react";
import { KeyWordContext } from "../Context/keyWordContext";


const SearchForm = () => {
  const [keyWord, setKeyWord] = useContext(KeyWordContext);
  const handleSearch = (e) => {
    const key = e.target.value;
    setKeyWord(key);
    console.log(key);
  };
  return (
    <form action="#" className="searchbox">
      <input
        type="text"
        className="search-input"
        placeholder="Type here to search..."
        onChange={(e) => handleSearch(e)}
      />
      <a href="#" className="search-link">
        <i class="fa-solid fa-magnifying-glass"></i>
      </a>
    </form>
  );
};
export default SearchForm;
