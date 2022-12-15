import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Sorting/actiontype";

function Sorting() {
  const dispatch = useDispatch();

  const [searchParams, setsearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");
  // console.log(initialCategory)
  const initialsort = searchParams.getAll("sort");
  const [sort, setsort] = useState(initialsort[0] || "");

  const [category, setcategory] = useState(initialCategory || "biryani");

  // const handlefilter=(e)=>{
  //   const newCategories=[...category];
  //   if(newCategories.includes(e.target.value)){
  //       newCategories.splice(newCategories.indexOf(e.target.value),1);
  //   }else{
  //     newCategories.push(e.target.value);
  //   }
  //   setcategory(newCategories);
  // }

  const handlefilter = (e) => {
    setcategory(e.target.value);
  };
  const handlesort = (e) => {
    setsort(e.target.value);
  };
  useEffect(() => {
    let params = {};
    params.category = category;
    setsearchParams(params);
  }, []);

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setsearchParams(params);
    dispatch(getData(category));
  }, [category, setsearchParams, sort]);

  // console.log(category)
  return (
    <div id="filteri_ng" style={{ width: "300px", marginTop: "10%" }}>
      <h1>Filter Component</h1>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="biryani"
            checked={category.includes("biryani")}
          />
          <label htmlFor="">Biryani</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="burger"
            checked={category.includes("burger")}
          />
          <label htmlFor="">Burger</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="chicken"
            checked={category.includes("chicken")}
          />
          <label htmlFor="">Chicken</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="exclusivedeal"
            checked={category.includes("exclusivedeal")}
          />
          <label htmlFor="">exclusivedeal</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="newlaunch"
            checked={category.includes("newlaunch")}
          />
          <label htmlFor="">newlaunch</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="boxmeal"
            checked={category.includes("boxmeal")}
          />
          <label htmlFor="">boxmeal</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="snacks"
            checked={category.includes("snacks")}
          />
          <label htmlFor="">snacks</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="stayhomespecial"
            checked={category.includes("stayhomespecial")}
          />
          <label htmlFor="">stayhomespecial</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="beverages"
            checked={category.includes("beverages")}
          />
          <label htmlFor="">beverages</label>
        </div>
      </div>
      <h1>Sort By Price</h1>

      <div onChange={handlesort}>
        <input
          type="radio"
          name="sortBy"
          value="asc"
          defaultChecked={sort === "asc"}
        />
        <label htmlFor="">Ascending</label>
        <br />
        <input
          type="radio"
          name="sortBy"
          value="desc"
          defaultChecked={sort === "desc"}
        />
        <label htmlFor="">Descending</label>
      </div>
    </div>
  );
}

export default Sorting;
