import {
  Box,
  Flex,
  Grid,
  GridItem,
  Select,
  VStack,
  HStack,
  Button,
  useTimeout,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayProducts from "../Components/DisplayProducts";
import Sorting from "../Components/Sorting";
import "../CSS/admin.css";
import { getData } from "../Redux/Sorting/actiontype";
import { useState, useEffect } from "react";
import ProductManagement from "../Components/ProductManagement";
import { UserAuth } from "./Context/UserAuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { store } from "../Redux/store";

function AdminDashboard() {
  const { user, logOut } = UserAuth();
  const location = useLocation();
  const [flag, setflag] = useState(false);
  const navigate = useNavigate();
  const [searchParams,setSearchParams]=useSearchParams();
  console.log(store.getState());
  // console.log(user);
  const data = useSelector((state) => state.Sortingreducer.data);
  // console.log(data)
  const [Data, setData] = useState([]);
  // console.log(Data)

  const handleLogout = async () => {
    try {
      await logOut;
      navigate("/adminlogin");
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(data);

  const dispatch = useDispatch();

  const handleSort = (e) => {
    // setData(data)
    console.log(e.target.value);
    if (e.target.value == "High") {
      data.sort((a, b) => {
        // console.log(el)
        return b.price - a.price;
      });
    } else {
      data.sort((a, b) => {
        // console.log(el)
        return a.price - b.price;
      });
    }
    // console.log(Data)
    setflag(!flag);
    // console.log(data)
    setData(data);
  };

  // useEffect(() => {
  //   dispatch(getData("biryani"));
  // }, []);

  useEffect(() => {
    setData(data);
  }, [flag, location.search]);

  useEffect(() => {
    if(location||data.length==0){
        const getbooksParams={
            params:{
                option:searchParams.getAll("option"),   
            }
        }
        console.log(getbooksParams)
        dispatch(getData(getbooksParams));
    }
    // console.log(books)
}, [data.length,dispatch,location.search]);

  return (
    //display sales status on daily, weekly and monthly bases
    <>
      <div id="admin_display">
        <div>
          <h3>Sold 2 products today</h3>
        </div>
        <div>
          <h3>Sold 15 products this week</h3>
        </div>
        <div>
          <h3>Sold 150 products this month</h3>
        </div>
        <div>
          <h3>{user && "welocme to admin page"} </h3>
        </div>
        <div>
          <Button
            colorScheme="teal"
            size="sm"
            style={{ borderRadius: "10px", margin: ".2rem" }}
            onClick={handleLogout}
          >
            signOut
          </Button>
        </div>
      </div>
      {/* <Grid templateColumns="repeat(2, 1fr)"> */}
      <HStack id="filteri_ng">
        <VStack position="fixed" top="30px">
          <Sorting />
          <Select
            w={"200px"}
            color="black"
            bg={"grey"}
            onChange={(e) => handleSort(e)}
            placeholder="Sort By Price"
          >
            <option value="High">High</option> <option value="Low">Low</option>
          </Select>

          <ProductManagement />
        </VStack>

        {/* <GridItem marginTop="70px" h={"auto"} ml="25%" > */}

        <DisplayProducts data={data == [] ? Data : data} />
        {/* </GridItem> */}
      </HStack>
      {/* </Grid> */}
    </>
  );
}

export default AdminDashboard;
