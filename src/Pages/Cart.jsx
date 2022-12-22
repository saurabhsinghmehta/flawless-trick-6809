import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import LargeWithAppLinksAndSocial from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import {GetCartData,deleteTodo} from "../Redux/AddToCart/action"
import axios from "axios";
function Cart() {
  const Data2=useSelector((state)=>state.CartReducer.cart);
  console.log(Data2)
  const dispatch=useDispatch();
  // console.log(store.getState())
  const data = [
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=22.82",
      title: "Cold Drink",
      price: 1000,
    }
  ];

  

  const handleDelete=(id)=>{
    console.log(id)
    dispatch(deleteTodo(id))
  }

  useEffect(() => {
   dispatch(GetCartData())
  }, []);
  return (
    <div>
      {" "}
      <Navbar />{" "}
      <Box marginTop="100px">
        <Box backgroundColor="#202124" padding="15px">
          <Heading size="sm" color="white">
            3 Stripes Pick up from: KFC Haldwani 3 Stripes ASAP
            <Button
              className="btn-1"
              marginLeft="15px"
              backgroundColor="#202124"
              padding="2px 25px"
              borderRadius="20px"
              border="1px solid white"
              _hover={{ bg: "red" }}
            >
              Change
            </Button>
          </Heading>
        </Box>
      </Box>
      <Flex>
        {/* my cart section */}
        <Box width="700px" >

          {/* <Flex> */}
            {Data2.map((item) => (
              <HStack boxShadow='xl' gap="50px" m="5%" key={item.id} >
              <Box width="200px">
                  <img
                    src={item.image}
                    alt="cart"
                  />

              </Box>
                
                
                <Box marginTop="30px" gap={"15px"}>
                  <p>{item.title}</p> <Button onClick={()=>handleDelete(item.id)}  >Remove</Button>
                </Box>{" "}
                <Box>
                  <Box display={"flex"}>
                    <Button
                      border={"1px solid grey"}
                      borderRadius={"100%"}
                      w="1px"
                      _hover={{ bg: "black", color: "white" }} 
                      gap="10px"
                    >
                      <MinusIcon size="10px" />
                    </Button>
                    <p style={{marginTop:"0px",fontSize:"30px"}}   >{1}</p>
                    <Button
                      border={"1px solid grey"}
                      borderRadius={"100%"}
                      w="2px"
                      _hover={{ bg: "black", color: "white" }}
                    >
                      <AddIcon />
                    </Button>
                  </Box>
                  <Box>
                    <p style={{fontSize:"20px"}}>{`$${item.price}`}</p>
                  </Box>
                </Box>
                </HStack>
            ))}
          {/* </Flex> */}
        </Box>
        {/* checkout section */}
        <Box></Box>
      </Flex>
      <LargeWithAppLinksAndSocial />{" "}
    </div>
  );
}

export default Cart;
