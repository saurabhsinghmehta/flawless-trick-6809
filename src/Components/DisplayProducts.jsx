import {
  Box,
  SimpleGrid,
  GridItem,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";

function DisplayProducts({ data }) {
  return (
    <div style={{ width: "100%", marginLeft: "300px" }}>
      {" "}
      {/* <Stack direction={{ lg: "row",xl:"row","2xl":"row", md: "column",base:"column",sm:"column" }} spacing="50px"> */}
      <SimpleGrid
        minChildWidth="250px"
        spacing="40px"
        marginTop="30px"
        textAlign="center"
        padding="2%"
      >
        {data.map((product) => (
          // <GridItem key={product.id}>
          <Box boxSize={"xsm"} height="300px">
            <Image w={"100%"} src={product.image} h="200px" />{" "}
            <h2>{product.title}</h2>
            <h4>{product.category}</h4>
            <h3>{product.price}</h3>
            <p>{product.details}</p>
            <Box display="flex" justifyContent="space-evenly" margin="10px 0px">
              <Button
                _hover={{ bg: "teal" }}
                color={"white"}
                backgroundColor="grey"
              >
                Edit
              </Button>
              <Button
                _hover={{ bg: "teal" }}
                color={"white"}
                backgroundColor="green"
              >
                Done
              </Button>
              <Button
                _hover={{ bg: "teal" }}
                color={"white"}
                backgroundColor="red"
              >
                Delete
              </Button>
            </Box>
          </Box>
          // </GridItem>
        ))}
      </SimpleGrid>
      {/* </Stack> */}
    </div>
  );
}

export default DisplayProducts;
