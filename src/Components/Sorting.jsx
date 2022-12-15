import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Sorting/actiontype";

function Sorting() {
  // console.log(store.getState())
  const data=useSelector((state)=>state.data);
  console.log(data)
  const dispatch=useDispatch();

  const [searchParams, setsearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialsort = searchParams.getAll("sort");
  // console.log(initialsort)
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
  // console.log(category)
  const handlesort = (e) => {
    setsort(e.target.value);
  };
  // console.log(sort)

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setsearchParams(params);
    console.log(params);
    dispatch(getData(category));
  }, [category, setsearchParams, sort]);

  return (
    <div style={{ width: "300px", border: "1px solid red", marginTop: "10%" }}>
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
