import React, { useState } from 'react'

const ListCompo = ({data}) => {
    let [search, setSearch]=useState('')
    const iterate = (array) => {
        return array.map((arrayItem) => {
          return <li>{arrayItem}</li>;
        });
      };
      let handleSearch = (e) => {
        setSearch(e.target.value);
      };
      let list = data;
      let searchStr = search.trim().toLowerCase();
      if (searchStr.length > 0) {
        list = list.filter((letter) => {
          return letter.toLowerCase().match(searchStr);
        });
      }
  return (
    <div>
      <h3>Search:</h3>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search the name from list"
      />
      <ul>{iterate(list)}</ul>
    </div>
  )
}

export default ListCompo
