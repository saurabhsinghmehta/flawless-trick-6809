import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

function DisplayProducts({ data }) {
  // console.log(data);
  return (
    <div style={{ border: "2px solid red" }}>
      {" "}
      <Grid templateColumns="repeat(3,1fr)" marginLeft={"50px"} gap="10px">
        {data.map((product) => (
          <GridItem key={product.id}>
            <Box w={"300px"}>
              <Image w={"100%"} src={product.image} /> <h2>{product.title}</h2>
              <h4>{product.category}</h4>
              <h3>{product.price}</h3>
              <p>{product.details}</p>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export default DisplayProducts;
