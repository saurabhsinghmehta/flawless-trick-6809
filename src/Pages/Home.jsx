import React from 'react'
import Navbar from '../Components/Navbar';
import {Box, Image,Heading, Container, Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Box>
        <Image src='https://images.ctfassets.net/wtodlh47qxpt/5477Y6AToWWjDUgchkqn5l/644a80e35a990d1bee592811b278fddd/Wedmesday_banner_1440x396px.jpg?w=1440&fit=fill&fm=webp' alt='ic' />
        </Box>
        <Box backgroundColor='#f8f7f5'>
         <Heading size='xl' paddingY='40px' fontWeight='extrabold'>WELCOME TO BFC!!</Heading>
        </Box>
        <Container maxW='1200px'>
            <Flex alignItems='center' justifyContent='space-evenly' >
         <Heading size='xl' paddingY='40px' fontWeight='bold'>BROWSE CATEGORIES</Heading>
         <Box height='5px' width='600px' backgroundColor='#f8f7f5' />
            </Flex>
        </Container>
    </div>
  )
}

export default Home
