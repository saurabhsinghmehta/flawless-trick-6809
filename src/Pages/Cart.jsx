import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack,Text } from "@chakra-ui/layout";
import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import LargeWithAppLinksAndSocial from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import {GetCartData,deleteTodo} from "../Redux/AddToCart/action"
import Checkout2 from "../Pages/Context/Checkout2"


function Cart() {
  const Data2=useSelector((state)=>state.CartReducer.cart);
  console.log(Data2)
  const dispatch=useDispatch();

  let total = Data2 && Data2.length>0 && Data2.reduce((acc, el) => acc + Number(el.price), 0);

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
            { Data2 && Data2.length>0 && Data2.map((item) => (
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
        <Box>
        <Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          w="400px"
          p="15px"
          ml="20px"
          h="180px"
        >
          <Box>
            <Flex justifyContent="space-between" fontSize={12} p="10px">
              <Text>Item Total(MRP)</Text>
              <Text>$ {total}</Text>
            </Flex>
          </Box>
          <hr></hr>
          <hr></hr>
          <Box marginTop="50px">
            <Flex justifyContent="space-between" fontSize={12} p="10px">
              <Text fontWeight="extrabold">To be paid</Text>
              <Text fontWeight="extrabold">$ {total}</Text>
            </Flex>
          </Box>
        </Box>
        <Link to="/checkout">
        <Button
          w="100%"
          bg="#FF6F61"
          width="400px"
          ml="20px"
          mt="10px"
          _hover={{}}
          onClick={localStorage.setItem("total",total)}
        >
          <Text fontWeight={500} color={"white"}>Checkout</Text>
        </Button>
        </Link>
      </Box>
        </Box>
      </Flex>
      <LargeWithAppLinksAndSocial />{" "}
    </div>
  );
}

export default Cart;
