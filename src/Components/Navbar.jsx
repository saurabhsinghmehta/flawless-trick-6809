import React from 'react';
import { Flex,Heading,Box,Spacer,Container,Image } from '@chakra-ui/react';
import ProjectLogo from '../Assets/ProjectLogo.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <Box border='1px solid'>
    <Container maxW='1450px' maxH='120px' backgroundColor='white' paddingTop='10px' paddingBottom='10px' position='fixed' zIndex='1' top='0' overflow='visible'>
 <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Link to='/'><Image src={ProjectLogo} alt='BFC' width='70px'  /></Link>
  </Box>
  <Box p='2'>
    <Link to='/menu'><Heading size='xs'>Menu</Heading></Link>
  </Box>
  <Box p='2'>
  <Link to='/deals'><Heading size='xs'>Deals</Heading></Link>
  </Box>
  <Spacer />
    <Link to='/login'><Box p='2' width='90px'>
  <Flex justifyContent='space-between'>
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg' alt='ic' />
    <Heading size='xs'>Sign In</Heading>
  </Flex>
    </Box></Link>
    <Link to='/cart'><Box p='2'>
        <Flex alignItems='center'>
    <Heading size='xs'>$0</Heading>
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg' width='50px' alt='bucket' />
        </Flex>   
    </Box>
    </Link>
  </Flex>
  </Container>
  </Box>
  )
}

export default Navbar