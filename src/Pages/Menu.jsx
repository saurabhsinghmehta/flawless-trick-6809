import React from 'react';
import Navbar from '../Components/Navbar';
import { Box, Flex } from '@chakra-ui/react';

const Menu = () => {
  return (
    <div>
      <Navbar />

      <Box backgroundColor='red' marginTop='100px'>
        <Flex>
        <Box backgroundColor='black' width='300px' color='white'>helooo</Box>
        <Box backgroundColor='red' width='1000px' color='white'>helllo</Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Menu
