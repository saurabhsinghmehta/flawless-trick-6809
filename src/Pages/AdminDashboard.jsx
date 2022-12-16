import {
  Box,
  Flex,
  Grid,
  GridItem,
  Select,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayProducts from "../Components/DisplayProducts";
import Sorting from "../Components/Sorting";
import "../CSS/admin.css";
import { getData } from "../Redux/Sorting/actiontype";
import { useEffect } from "react";
import ProductManagement from "../Components/ProductManagement";
import { UserAuth } from "./Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);
  const data = useSelector((state) => state.Sortingreducer.data);

  const handleLogout = async () => {
    try {
      await logOut;
      navigate("/adminlogin");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("biryani"));
  }, []);
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
      <HStack>
        <VStack border="1px solid red" position="fixed" top="30px">
          <Sorting />
          <Select w={"200px"} color="black" bg={"grey"}>
            {" "}
            <option value="Sort By Price">Sort By Price</option>
            <option value="High">High</option> <option value="Low">Low</option>{" "}
          </Select>

          <ProductManagement />
        </VStack>

        {/* <GridItem marginTop="70px" h={"auto"} ml="25%" > */}

        <DisplayProducts data={data} />
        {/* </GridItem> */}
      </HStack>
      {/* </Grid> */}
    </>
  );
}

export default AdminDashboard;
