import React from 'react'
import Navbar from '../Components/Navbar';
import {Box, Image,Heading, Container, Flex,SimpleGrid,Text} from '@chakra-ui/react';

const data=[
    {
    id:1,
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=22.82",
    title:"HOT DEALS"
    },
    {
    id:2,
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=22.82",
    title:"CHICKEN BUCKETS"
    },
    {
        id:3,
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=22.82",
        title:"HOT LAUNCHES"
    },
    {
        id:4,
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=22.82",
        title:"BOX MEALS"
    },
    {
        id:5,
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.82",
        title:"BURGERS"
    },
    {
        id:6,
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=22.82",
        title:"BIRIYANI BUCKETS"
        },
    {
        id:7,
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=22.82",
        title:"SNACK"
    }
];

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

        {/* Browse Categories */}
        <Container maxW='1200px'>
            <Flex alignItems='center' justifyContent='space-evenly' >
         <Heading size='xl' paddingY='40px' fontWeight='bold'>BROWSE CATEGORIES</Heading>
         <Box height='5px' width='600px' backgroundColor='#f8f7f5' />
            </Flex>
        </Container>
        <Container maxW='1100px'>
        <SimpleGrid minChildWidth='200px' spacing='40px'>
        
        {data && data.map((item)=>(
         <Box bg='#f8f7f5'>
           <Image src={item.img} alt='ic' />
           <Heading size='sm' paddingY='30px' fontWeight='extrabold'>{item.title}</Heading>
         </Box>
        ))}
        <Box bg='#f8f7f5'>
           <Image src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt='ic' width='200px' marginLeft='20px' marginTop='30px' />
           <Text size='sm' paddingY='40px' fontWeight='bold'>View All Menu ----- </Text>
         </Box>

        </SimpleGrid>
        </Container>
    </div>
  )
}

export default Home
