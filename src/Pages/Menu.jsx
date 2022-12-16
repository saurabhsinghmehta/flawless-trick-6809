import React, { useEffect } from 'react'; 
import Navbar from '../Components/Navbar'; 
import { Box, Container, Flex, Heading ,Text,SimpleGrid,Image,Button, Input} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuData } from '../Redux/Menudata/action';
 const cat=[
   { id:1, cate:"CHICKEN" }, 
   { id:2, cate:"EXCLUSIVE DEALS" }, 
   { id:3, cate:"NEW LAUNCH" }, 
   { id:4, cate:"BIRIYANI" }, 
   { id:5, cate:"BOX MEALS" }, 
   { id:6, cate:"BURGERS" }, 
   { id:7, cate:"SNACKS" }, 
   { id:8, cate:"STAY HOME SPECIAL" }, 
   { id:9, cate:"BEVERAGES" } 
  ] 


 const Menu = () => { 

  const menuData=useSelector((store)=>store.Menureducer.menudata);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getMenuData());
  },[dispatch]);
  console.log(menuData);

  return ( 
  <div> 
    <Navbar /> 
    
    <Box marginTop='120px'> 
    <Flex> 
      <Box width='350px' position='fixed'> 
    <Heading fontWeight='extrabold'>BFC MENU</Heading> 
    <Box> {cat.map((ele)=>( 
    <Box key={ele.id} marginTop='20px' > 
    <Text fontWeight='bold'>{ele.cate}</Text> 
    </Box> ))} 
    </Box> 
    </Box> 

    {/* menudata */}
   <Box backgroundColor='' width='1000px' textAlign='left' marginLeft='350px'>
     <Input placeholder='Search our menu' marginBottom='30px' />
  
    <hr />

    
    {cat.map((it)=>(
        <Container maxW='900px' marginY='60px' key={it.id}>
        <Heading fontWeight='extrabold'>{it.cate}</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.chicken && menuData.chicken.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id}>
           <Image src={ele.image} alt='' width='250px' height='200px' />
           <Text fontWeight='bold'>{ele.title}</Text>
           <Text>{ele.category}</Text>
           <Text fontWeight='bold'>$ {ele.price}</Text>
           <Text>{ele.detail}</Text>
           <Button backgroundColor='red' color='white' borderRadius='25px' padding='20px'>Add to Cart</Button>
          </Box>
         ))}
     </SimpleGrid>
    </Container>  
    ))}
 
    </Box> 
    </Flex> 
    </Box> 
    </div> 
    ) 
  }

  export default Menu;

