import React, { useEffect } from 'react'; 
import Navbar from '../Components/Navbar'; 
import { Box, Container, Flex, Heading ,Text,SimpleGrid,Image,Button, Input} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuData } from '../Redux/Menudata/action';
import "../CSS/menu.css"
import Cart from '../Components/Cart';
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
      <Box width='350px' position='fixed' id="menu"> 
    <Heading fontWeight='extrabold'>BFC MENU</Heading> 
    <Box> {cat.map((ele)=>( 
    <Box key={ele.id} marginTop='20px' > 
    <Text fontWeight='bold'>{ele.cate}</Text> 
    </Box> ))} 
    </Box> 
    </Box> 

    {/* menudata */}
   <Box id="menu-data" backgroundColor='' width='1000px' textAlign='left' marginLeft='350px'>
     <Input placeholder='Search our menu' marginBottom='30px' />
  
    <hr />

    
        <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Chicken</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center' border="0px solid red">
   
         {menuData.chicken && menuData.chicken.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Exclusive Deals</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.exclusivedeal && menuData.exclusivedeal.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
           <Image  src={ele.image} alt='' width='250px' height='200px' justifyContent="center" />
           <Text fontWeight='bold'>{ele.title}</Text>
           <Text>{ele.category}</Text>
           <Text fontWeight='bold'>$ {ele.price}</Text>
           <Text>{ele.detail}</Text>
           <Button backgroundColor='red' color='white' borderRadius='25px' padding='20px'>Add to Cart</Button>
          </Box>
         ))}
     </SimpleGrid>
    </Container> 

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>New Launch</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.newlaunch && menuData.newlaunch.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Biriyani</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.biryani && menuData.biryani.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Box Meals</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.boxmeal && menuData.boxmeal.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Burgers</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.burger && menuData.burger.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Snacks</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.snacks && menuData.snacks.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Stay Home Special</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center' >
   
         {menuData.stayhomespecial && menuData.stayhomespecial.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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

    <Container maxW='900px' marginY='60px' >
        <Heading fontWeight='extrabold'>Beverages</Heading>  
   
        <SimpleGrid minChildWidth='250px' spacing='40px' marginTop='30px' textAlign='center'>
   
         {menuData.beverages && menuData.beverages.map((ele)=>(
           <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding='10px' lineHeight='30px' key={ele.id} maxWidth="300px">
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
 
    </Box> 
    </Flex> 
    </Box> 
    </div> 
    ) 
  }

  export default Menu;

