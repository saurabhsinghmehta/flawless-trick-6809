import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Sorting/actiontype";

function Sorting() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Sortingreducer.data);
  // console.log(data)

  const [searchParams, setsearchParams] = useSearchParams();
  const initialCategory = searchParams.get("option");
  const initialsort = searchParams.getAll("sort");
  const [sort, setsort] = useState(initialsort[0] || "");
  const [option, setoption] = useState(initialCategory || "biryani");

  const handlefilter = (e) => {
    setoption(e.target.value);
  };
  const handlesort = (e) => {
    setsort(e.target.value);
  };
  useEffect(() => {
    let params = {};
    params.option = option;
    setsearchParams(params);
  }, []);

  useEffect(() => {
    let params = {};
    params.option = option;
    sort && (params.sort = sort);
    setsearchParams(params);
    dispatch(getData(params));
    // console.log(data)
  }, [option, setsearchParams, sort]);

  // console.log(option)
  return (
    <div style={{ width: "300px" }}>
      <h1 style={{ marginBottom: "2%" }}>Filter Component</h1>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="biryani"
            checked={option.includes("biryani")}
          />
          <label htmlFor="">Biryani</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="burger"
            checked={option.includes("burger")}
          />
          <label htmlFor="">Burger</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="chicken"
            checked={option.includes("chicken")}
          />
          <label htmlFor="">Chicken</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="exclusivedeal"
            checked={option.includes("exclusivedeal")}
          />
          <label htmlFor="">exclusivedeal</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="newlaunch"
            checked={option.includes("newlaunch")}
          />
          <label htmlFor="">newlaunch</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="boxmeal"
            checked={option.includes("boxmeal")}
          />
          <label htmlFor="">boxmeal</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="snacks"
            checked={option.includes("snacks")}
          />
          <label htmlFor="">snacks</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="stayhomespecial"
            checked={option.includes("stayhomespecial")}
          />
          <label htmlFor="">stayhomespecial</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="beverages"
            checked={option.includes("beverages")}
          />
          <label htmlFor="">beverages</label>
        </div>
      </div>
    </div>
  );
}

export default Sorting;
