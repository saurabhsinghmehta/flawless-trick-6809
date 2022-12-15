import React from 'react'; 
import Navbar from '../Components/Navbar'; 
import { Box, Flex, Heading ,Text} from '@chakra-ui/react';
 const cat=[
   { id:1, name:"CHICKEN" }, 
   { id:2, name:"EXCLUSIVE DEALS" }, 
   { id:3, name:"NEW LAUNCH" }, 
   { id:4, name:"BIRIYANI" }, 
   { id:5, name:"BOX MEALS" }, 
   { id:6, name:"BURGERS" }, 
   { id:7, name:"SNACKS" }, 
   { id:8, name:"STAY HOME SPECIAL" }, 
   { id:9, name:"BEVERAGES" } 
  ] 


 const Menu = () => { 
  return ( 
  <div> 
    <Navbar /> 
    
    <Box marginTop='120px'> 
    <Flex> <Box width='350px'> 
    <Heading fontWeight='extrabold'>BFC MENU</Heading> 
    <Box> {cat.map((ele)=>( 
    <Box key={ele.id} marginTop='20px' > 
    <Text fontWeight='bold'>{ele.name}</Text> 
    </Box> ))} 
    </Box> 
    </Box> 
    <Box backgroundColor='red' width='1000px' color='white'>helllo</Box> 
    </Flex> 
    </Box> 
    </div> 
    ) 
  }

  export default Menu;
