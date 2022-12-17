import { Box, Button, Container,Heading,Image,Flex,Spacer,Link,Text,SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar';
import style from "../CSS/DealsOffers.css"
import Footer from "../Components/Footer"
import { Navigate } from 'react-router-dom';

let offer = [
  {
    id: 1,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
    title: "1 PC FREE CHICKEN ZINGER",
  },
  {
    id: 2,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
    title: "ADD 1 PC HOT LEG PIECE",
  },
 
  
  {
    id: 3,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
    title: "ADD 2 PC HOT N CRISPY",
  },
  {
    id: 4,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
    title: "1 PC FREE CHICKEN ZINGER",
  },
  {
    id: 5,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
    title: "1 PC FREE VEG ZINGER",
  },
  {
    id: 6,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
    title: "1 PC FREE VEG CRISPY",
  },
  
  
];
const Deals = () => {
    
  return (
    <div>
        <Navbar/>
        
        <Box marginTop='100px'>
        <Box backgroundColor='#202124' padding='15px'>
         <Heading size='sm' color='white'   >LETS ORDER FOR DELIVERY,PICK UP,OR DINE-IN
         <Button className='btn-1' marginLeft='15px' backgroundColor='#e4002b' padding='5px 30px' borderRadius='10%'>Start Order</Button>
         </Heading>
        </Box>
        <Image src='https://images.ctfassets.net/wtodlh47qxpt/5477Y6AToWWjDUgchkqn5l/644a80e35a990d1bee592811b278fddd/Wedmesday_banner_1440x396px.jpg?w=1440&fit=fill&fm=webp' alt='ic' />
        </Box>
        {/* Offers&Deals */}
      <Box backgroundColor="white" marginTop="20px">
        <Container maxW="1000px" paddingTop="50px">
          <Flex justifyContent="space-between">
            <Box p="4">
              <Heading color="black">NATIONAL OFFERS</Heading>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/">
                <Text color="black"  textDecoration='underline'>
                  Sign in to see exclusive offers & deals
                </Text>
              </Link>
            </Box>
          </Flex>
        </Container>

        <Container maxW='1000px' marginTop='20px'  paddingBottom='50px'>
        <SimpleGrid minChildWidth='250px' spacing='40px'>
            {offer.map((item)=>(
                <Box backgroundColor='white' borderRadius='3%' paddingBottom='20px' key={item.id} boxShadow='0px 1px 0px 1px'>

                <Image src={item.img} />
                <Heading color="red" size="lg" fontWeight="extrabold">
                  {item.title}
                </Heading>
                <Button
                  width="120px"
                  marginTop="10px"
                  border="1px solid black"
                  borderRadius="20px"
                >
                  Redeem
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Footer/>
    </div>
  )
}

export default Deals