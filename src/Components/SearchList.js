import React, { useEffect, useState } from "react";
import "../Styles/SearchList.css";
import ListCompo from "./ListCompo";
const SearchList = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(
        "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
      );
      let data = await response.json();
      setData(data.Reggae);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>React Search!</h1>
          <p className="about">
            Here is a list You can Search Names...
          </p>
        </div>
        <ListCompo data={data} />
      </div>
    </div>
  );
};

export default SearchList;
