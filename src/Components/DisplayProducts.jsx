import { Box,SimpleGrid, GridItem, Image,Stack } from "@chakra-ui/react";
import React from "react";

function DisplayProducts({ data }) {
  // console.log(data);
  return (
    <div style={{ width:"100%",marginLeft:"300px" }}>
      {" "}
      {/* <Stack direction={{ lg: "row",xl:"row","2xl":"row", md: "column",base:"column",sm:"column" }} spacing="50px"> */}
      <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'  padding="2%">
        {data.map((product) => (
          // <GridItem key={product.id}>
            <Box >
              <Image w={"100%"} src={product.image} /> <h2>{product.title}</h2>
              <h4>{product.category}</h4>
              <h3>{product.price}</h3>
              <p>{product.details}</p>
            </Box>
          // </GridItem>
        ))}
      </SimpleGrid>
      {/* </Stack> */}
    </div>
  );
}

export default DisplayProducts;
