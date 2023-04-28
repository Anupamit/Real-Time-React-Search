import React, { useState, useMemo } from 'react';

const ListCompo = ({data}) => {
  const [search, setSearch] = useState('');

  const filteredList = useMemo(() => {
    let list = data;
    let searchStr = search.trim().toLowerCase();
    if (searchStr.length > 0) {
      list = list.filter((letter) => {
        return letter.toLowerCase().indexOf(searchStr) !== -1;
      });
    }
    return list;
  }, [data, search]);

  const iterate = (array) => {
    return array.map((arrayItem) => {
      return <li>{arrayItem}</li>;
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h3>Search:</h3>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search the name from list"
      />
      <ul>{iterate(filteredList)}</ul>
    </div>
  );
}

export default ListCompo;
