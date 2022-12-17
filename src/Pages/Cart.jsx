import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import LargeWithAppLinksAndSocial from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Cart() {
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
      cart
      <LargeWithAppLinksAndSocial />{" "}
    </div>
  );
}

export default Cart;
