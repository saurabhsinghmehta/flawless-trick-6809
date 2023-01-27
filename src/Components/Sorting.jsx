import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Sorting/actiontype";
import { Heading,Text } from "@chakra-ui/react";

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
    console.log(data)
  }, [option, setsearchParams, sort]);

  // console.log(option)
  return (
    <div style={{ width: "300px" }}>
      <Text fontSize="2xl" style={{ marginBottom: "4%",marginLeft:"-5%" }}>Filter Component</Text>
      <div style={{textAlign:"left",marginLeft:"20%"}}  >
        <div>
          <input
           style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="biryani"
            checked={option.includes("biryani")}
          />
          <label htmlFor="">Biryani</label>
        </div>
        <div>
          <input
           style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="burger"
            checked={option.includes("burger")}
          />
          <label htmlFor="">Burger</label>
        </div>
        <div>
          <input
           style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="Chicken"
            checked={option.includes("Chicken")}
          />
          <label htmlFor="">Chicken</label>
        </div>
        <div>
          <input
            type="checkbox"
            style={{marginRight:"5%"}}
            onChange={handlefilter}
            value="exclusivedeal"
            checked={option.includes("exclusivedeal")}
          />
          <label htmlFor="">exclusivedeal</label>
        </div>
        <div>
          <input
           style={{marginRight:"5%"}}
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
            style={{marginRight:"5%"}}
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
            style={{marginRight:"5%"}}
            value="snacks"
            checked={option.includes("snacks")}
          />
          <label htmlFor="">snacks</label>
        </div>
        <div>
          <input
            type="checkbox"
            style={{marginRight:"5%"}}
            onChange={handlefilter}
            value="stayhomespecial"
            checked={option.includes("stayhomespecial")}
          />
          <label htmlFor="">stayhomespecial</label>
        </div>
        <div>
          <input
            type="checkbox"
            style={{marginRight:"5%"}}
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
