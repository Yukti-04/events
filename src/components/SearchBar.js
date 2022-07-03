import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
    return (
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          {/* { <div className="searchIcon">
            {filteredData.length === 0 ? (
              <button><i className="fas fa-search"></i></button>
            ) : (
              <button onClick={clearInput}><i className="fas fa-search" ></i></button>
            )}
          </div> } */}
        </div>
      </div>
    );
  }

export default SearchBar;