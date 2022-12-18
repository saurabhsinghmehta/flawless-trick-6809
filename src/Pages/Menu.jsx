import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";

// import { useDispatch, useSelector } from "react-redux";
// import { getMenuData } from "../Redux/Menudata/action";
import "../CSS/menu.css";
import { getData } from "../Redux/Sorting/actiontype";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
// import { getMenuData } from "../Redux/Menudata/action";
import "../CSS/menu.css";
import { PostData } from "../Redux/AddToCart/action";

const cat = [
  { id: 1, cate: "CHICKEN" },
  { id: 2, cate: "EXCLUSIVE DEALS" },
  { id: 3, cate: "NEW LAUNCH" },
  { id: 4, cate: "BIRIYANI" },
  { id: 5, cate: "BOX MEALS" },
  { id: 6, cate: "BURGERS" },
  { id: 7, cate: "SNACKS" },
  { id: 8, cate: "STAY HOME SPECIAL" },
  { id: 9, cate: "BEVERAGES" },
];

const Menu = () => {
  const products = useSelector((store) => {
    return store.Sortingreducer.data;
  });
  const Chicken = products.filter((i) => i.option === "Chicken");
  const biryani = products.filter((i) => i.option === "biryani");
  const newlaunch = products.filter((i) => i.option === "newlaunch");
  const snacks = products.filter((i) => i.option === "snacks");
  const burger = products.filter((i) => i.option === "burger");
  const boxmeal = products.filter((i) => i.option === "boxmeal");
  const exclusivedeal = products.filter((i) => i.option === "exclusivedeal");
  const stayhomespecial = products.filter(
    (i) => i.option === "stayhomespecial"
  );
  const beverages = products.filter((i) => i.option === "beverages");

  const menuData = useSelector((store) => store.Menureducer.menudata);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  // console.log(menuData);

  const handleCart = ({ title, image, category, price }) => {
    let param = {
      title,
      image,
      category,
      price,
    };
    alert("Product Added to Cart Successfully");
    // console.log(title,image,category,price)
    dispatch(PostData(param));
  };

  return (
    <div>
      <Navbar />

      <Box marginTop="120px">
        <Flex>
          <Box width="350px" position="fixed" id="menu">
            <Heading fontWeight="extrabold">BFC MENU</Heading>
            <Box>
              {" "}
              {cat.map((ele) => (
                <Box key={ele.id} marginTop="20px">
                  <Text fontWeight="bold">{ele.cate}</Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* menudata */}
          <Box
            id="menu-data"
            backgroundColor=""
            width="1000px"
            textAlign="left"
            marginLeft="350px"
          >
            <Input
              placeholder="Search our menu"
              marginBottom="30px"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <hr />

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Chicken</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
                border="0px solid red"
              >
                {Chicken.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    {" "}
                    {ele.available ? (
                      <Box>
                        {" "}
                        <Image
                          src={ele.image}
                          alt=""
                          width="250px"
                          height="200px"
                        />
                        <Text fontWeight="bold">{ele.title}</Text>
                        <Text>{ele.category}</Text>
                        <Text fontWeight="bold">$ {ele.price}</Text>
                        <Text>{ele.detail}</Text>
                        <Button
                          backgroundColor="red"
                          color="white"
                          borderRadius="25px"
                          padding="20px"
                          disabled={false === ele.available}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        {" "}
                        <Image
                          src={ele.image}
                          alt=""
                          width="250px"
                          height="200px"
                        />
                        <Text fontWeight="bold">{ele.title}</Text>
                        <Text>{ele.category}</Text>
                        <Text fontWeight="bold">$ {ele.price}</Text>
                        <Text>{ele.detail}</Text>
                        <Button
                          backgroundColor="red"
                          color="white"
                          borderRadius="25px"
                          padding="20px"
                          disabled={false === ele.available}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    )}
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Exclusive Deals</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {exclusivedeal.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                      justifyContent="center"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">New Launch</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {newlaunch.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}

                {menuData.newlaunch &&
                  menuData.newlaunch.map((ele) => (
                    <Box
                      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                      padding="10px"
                      lineHeight="30px"
                      key={ele.id}
                      maxWidth="300px"
                    >
                      <Image
                        src={ele.image}
                        alt=""
                        width="250px"
                        height="200px"
                      />
                      <Text fontWeight="bold">{ele.title}</Text>
                      <Text>{ele.category}</Text>
                      <Text fontWeight="bold">$ {ele.price}</Text>
                      <Text>{ele.detail}</Text>
                      <Button
                        backgroundColor="red"
                        color="white"
                        borderRadius="25px"
                        padding="20px"
                        onClick={() => handleCart({ ...ele })}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Biriyani</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {biryani.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Box Meals</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {boxmeal.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Burgers</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {burger.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Snacks</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {snacks.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    {/* jsx */}
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Stay Home Special</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {stayhomespecial.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>

            <Container maxW="900px" marginY="60px">
              <Heading fontWeight="extrabold">Beverages</Heading>

              <SimpleGrid
                minChildWidth="250px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
              >
                {beverages.map((ele) => (
                  <Box
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    padding="10px"
                    lineHeight="30px"
                    key={ele.id}
                    maxWidth="300px"
                  >
                    <Image
                      src={ele.image}
                      alt=""
                      width="250px"
                      height="200px"
                    />
                    <Text fontWeight="bold">{ele.title}</Text>
                    <Text>{ele.category}</Text>
                    <Text fontWeight="bold">$ {ele.price}</Text>
                    <Text>{ele.detail}</Text>
                    <Button
                      backgroundColor="red"
                      color="white"
                      borderRadius="25px"
                      padding="20px"
                      disabled={false === ele.available}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </div>
  );
};

export default Menu;
