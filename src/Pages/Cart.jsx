import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack,Text } from "@chakra-ui/layout";
import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import LargeWithAppLinksAndSocial from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import {GetCartData,deleteTodo} from "../Redux/AddToCart/action"
import Checkout2 from "../Pages/Context/Checkout2"
import { useToast } from "@chakra-ui/react";


function Cart() {
  const navigate=useNavigate();
  const Data2=useSelector((state)=>state.CartReducer.cart);
  console.log(Data2)
  const dispatch=useDispatch();

  let total = Data2 && Data2.length>0 && Data2.reduce((acc, el) => acc + Number(el.price), 0);
  console.log(total)
  const toast=useToast();

  const handleDelete=(id)=>{
    console.log(id)
    toast({
      title: "Product Deleted from Cart",
      status: "info",
      duration: 2000,
      isClosable: true,
      position:"top"
    });
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
      {/* <Flex> */}
        {/* my cart section */}
        <Box width="80%" m="auto">
          
          {/* <Flex> */}
            { Data2 && Data2.length>0 && Data2.map((item) => (
              <HStack gap="50px" m="5%" key={item.id} p="3%" borderRadius="15px"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              >
              <Box width="200px">
                  <img
                  
                  style={{borderRadius:"15px"}}
                    src={item.image}
                    alt="cart"
                  />

              </Box>
                
                
                <Box marginTop="30px" gap={"15px"} textAlign="left" >
                  <p><b>{item.title}</b></p>
                   <Button onClick={()=>handleDelete(item.id)} colorScheme="red" mt="15%"  >Remove</Button>
                </Box>
                <Box>
                  {/* <Box display={"flex"}>
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
                  </Box> */}
                  <Box>
                    <p style={{fontSize:"20px"}}><b>{`$ ${item.price}`}</b></p>
                  </Box>
                </Box>
                </HStack>
            ))}
          {/* </Flex> */}
        </Box>
        {/* checkout section */}
        
        {total&&<Box mb="2%" >
        <Box
        width="60%"
        mt="8%"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          p="3%"
          m="auto"
          borderRadius="25px"
        >
          <Box >
            <Flex justifyContent="space-between" p="10px">
              <Text>Item Total(MRP)</Text>
              <Text>$ {total}</Text>
            </Flex>
            <Flex justifyContent="space-between" p="10px">
              <Text>Shipping Charge</Text>
              <Text>$ 0</Text>
            </Flex>
          </Box>
          <hr></hr>
          <hr></hr>
          <Box marginTop="5%">
            <Flex justifyContent="space-between" p="10px" >
              <Text fontWeight="bold">To be paid</Text>
              <Text fontWeight="bold">$ {total}</Text>
            </Flex>
          </Box>
        </Box>
        <Link to="/checkout">
        <Button
          colorScheme="red"
          mt="2%"
          _hover={{}}
          onClick={localStorage.setItem("total",total)}
        >
          <Text fontWeight={500} color={"white"}>Checkout</Text>
        </Button>
        </Link>
      </Box>}
      {/* </Flex> */}
      {!total&&<Box>
        <Text fontSize="2xl" style={{marginTop:"5%" }}>Shopping Cart is Empty</Text>
        <Button colorScheme="red" m="5%" p="2%" onClick={()=>navigate("/menu")}  >Continue Shopping</Button>
        </Box>}
      <LargeWithAppLinksAndSocial />{" "}
    </div>
  );
}

export default Cart;
