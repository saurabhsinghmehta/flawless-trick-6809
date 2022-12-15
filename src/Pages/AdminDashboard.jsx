import { Box, Flex, Grid, GridItem, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayProducts from "../Components/DisplayProducts";
import Sorting from "../Components/Sorting";
import "../CSS/admin.css";
import { getData } from "../Redux/Sorting/actiontype";
import { useEffect } from "react";
import ProductManagement from "../Components/ProductManagement";

function AdminDashboard() {
  const data = useSelector((state) => state.Sortingreducer.data);

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
      </div>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Box display={"grid"} width="40%" padding={"20px"} gap="17px">
            <Sorting />
            <ProductManagement />
          </Box>
        </GridItem>
        <GridItem marginLeft="-440px" marginTop="70px" w={"1200px"} h={"auto"}>
          <Box>
            <Select w={"200px"} color="black" bg={"grey"}>
              {" "}
              <option value="Sort By Price">Sort By Price</option>
              <option value="High">High</option>{" "}
              <option value="Low">Low</option>{" "}
            </Select>
          </Box>

          <DisplayProducts data={data} />
        </GridItem>
      </Grid>
    </>
  );
}

export default AdminDashboard;
