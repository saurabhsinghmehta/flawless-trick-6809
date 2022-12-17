import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import LargeWithAppLinksAndSocial from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
function Cart() {
  const data = [
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=22.82",
      title: "Cold Drink",
      price: 1000,
    },
  ];
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
        <Box>
          <Flex>
            {data.map((item) => (
              <>
                <Box boxSize="10%" border="2px solid red">
                  {" "}
                  <Image src={item.img} alt="product" boxSize="100%" />
                </Box>
                <Box>
                  <p>{item.title}</p> <Link onClick={""}>Remove</Link>
                </Box>{" "}
                <Box>
                  <Box>
                    <Button>
                      <MinusIcon />
                    </Button>
                    <p>{}</p>
                    <Button>
                      <AddIcon />
                    </Button>
                  </Box>
                  <Box>
                    <p>{`$${item.price}`}</p>
                  </Box>
                </Box>
              </>
            ))}
          </Flex>
        </Box>
        {/* checkout section */}
        <Box></Box>
      </Flex>
      <LargeWithAppLinksAndSocial />{" "}
    </div>
  );
}

export default Cart;
