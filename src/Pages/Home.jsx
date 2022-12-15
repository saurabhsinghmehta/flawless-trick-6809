import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Image,
  Heading,
  Container,
  Flex,
  SimpleGrid,
  Text,
  Spacer,
  Link,
  Button,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";

const data = [
  {
    id: 1,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=22.82",
    title: "HOT DEALS",
  },
  {
    id: 2,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=22.82",
    title: "CHICKEN BUCKETS",
  },
  {
    id: 3,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=22.82",
    title: "HOT LAUNCHES",
  },
  {
    id: 4,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=22.82",
    title: "BOX MEALS",
  },
  {
    id: 5,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.82",
    title: "BURGERS",
  },
  {
    id: 6,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=22.82",
    title: "BIRIYANI BUCKETS",
  },
  {
    id: 7,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=22.82",
    title: "SNACK",
  },
];

let offer = [
  {
    id: 1,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
    title: "1 PC FREE CHICKEN ZINGER",
  },
  {
    id: 2,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
    title: "1 PC FREE VEG ZINGER",
  },
  {
    id: 3,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
    title: "ADD 2 PC HOT N CRISPY",
  },
];

const Home = () => {
  return (
    <div>

      <Navbar />
      <Box marginTop="100px">
        <Image
          src="https://images.ctfassets.net/wtodlh47qxpt/5477Y6AToWWjDUgchkqn5l/644a80e35a990d1bee592811b278fddd/Wedmesday_banner_1440x396px.jpg?w=1440&fit=fill&fm=webp"
          alt="ic"
        />
      </Box>
      <Box backgroundColor="#f8f7f5">
        <Heading size="xl" paddingY="40px" fontWeight="extrabold">
          WELCOME TO BFC!!
        </Heading>
      </Box>

        <Navbar />
        <Box marginTop='100px'>
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
         <Box bg='#f8f7f5' key={item.id}>
           <Image src={item.img} alt='ic' />
           <Heading size='sm' paddingY='30px' fontWeight='extrabold'>{item.title}</Heading>
         </Box>
        ))}
        <Box bg='#f8f7f5'>
           <Image src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt='ic' width='200px' marginLeft='20px' marginTop='30px' />
           <Text size='sm' paddingY='40px' fontWeight='bold'>View All Menu ----- </Text>
         </Box>


      {/* Browse Categories */}
      <Container maxW="1200px">
        <Flex alignItems="center" justifyContent="space-evenly">
          <Heading size="xl" paddingY="40px" fontWeight="bold">
            BROWSE CATEGORIES
          </Heading>
          <Box height="5px" width="600px" backgroundColor="#f8f7f5" />
        </Flex>
      </Container>
      <Container maxW="1100px">
        <SimpleGrid minChildWidth="200px" spacing="40px">
          {data &&
            data.map((item) => (
              <Box bg="#f8f7f5">
                <Image src={item.img} alt="ic" />
                <Heading size="sm" paddingY="30px" fontWeight="extrabold">
                  {item.title}
                </Heading>
              </Box>
            ))}
          <Box bg="#f8f7f5">
            <Image
              src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
              alt="ic"
              width="200px"
              marginLeft="20px"
              marginTop="30px"
            />
            <Text size="sm" paddingY="40px" fontWeight="bold">
              View All Menu -----{" "}
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Offers&Deals */}
      <Box backgroundColor="#202124" marginTop="80px">
        <Container maxW="1000px" paddingTop="50px">
          <Flex justifyContent="space-between">
            <Box p="4">
              <Heading color="white">OFFERS & DEALS</Heading>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/deals">
                <Text color="white" fontWeight="extrabold">
                  View All Deals ----{" "}
                </Text>
              </Link>
            </Box>
          </Flex>
        </Container>

        <Container maxW="1000px" marginTop="20px" paddingBottom="50px">
          <SimpleGrid minChildWidth="200px" spacing="40px">
            {offer.map((item) => (
              <Box backgroundColor="white" paddingBottom="20px">

        <Container maxW='1000px' marginTop='20px'  paddingBottom='50px'>
        <SimpleGrid minChildWidth='200px' spacing='40px'>
            {offer.map((item)=>(
                <Box backgroundColor='white' paddingBottom='20px' key={item.id}>

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
      <Footer />
    </div>
  );
};

export default Home;
