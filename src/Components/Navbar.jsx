import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Box,
  Spacer,
  Container,
  Image,
  Select,
  Text,
  Button
} from "@chakra-ui/react";
import ProjectLogo from "../Assets/ProjectLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleUser = (e) => {
    if (e.target.value == "User") {
      navigate("/login");
    }
    if (e.target.value == "Admin") {
      navigate("/adminlogin");
    }
  };
  let namee = localStorage.getItem("namePerson")||null

  const handleLogout=()=>{
    localStorage.removeItem("namePerson")
    window.location.reload()
  }

  return (
    <Box border="1px solid">
      <Container
        maxW="100%"
        maxH="120px"
        backgroundColor="white"
        paddingTop="10px"
        paddingBottom="10px"
        position="fixed"
        zIndex="1"
        top="0"
        overflow="visible"
      >
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Link to="/">
              <Image src={ProjectLogo} alt="BFC" width="70px" />
            </Link>
          </Box>
          <Box p="2">
            <Link to="/menu">
              <Heading size="xs">Menu</Heading>
            </Link>
          </Box>
          <Box p="2">
            <Link to="/deals">
              <Heading size="xs">Deals</Heading>
            </Link>
          </Box>
          <Spacer />
          
           {/* <Link to="/login">/
          
          username and logout */}
          {!namee?
          <Box p="2" width="140px">
          <Flex justifyContent="space-between">
            <Image
              src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
              alt="ic"
            />
            <Heading size="xs">
              <Select
                style={{ border: "transparent", marginLeft: ".2rem" }}
                placeholder="Sign In"
                onChange={(e) => handleUser(e)}
              >
                <option value="User">User</option>

                <option value="Admin">Admin</option>

                {/* <option value="option2">Admin</option> */}
              </Select>
            </Heading>
          </Flex>
        </Box>:
          <Box p="2" width="200px">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">{namee}</Text>
              <Heading size="xs">
              <Button onClick={handleLogout}>
                Log Out
              </Button>
              </Heading>
            </Flex>
          </Box>
          }
         
          


          {/* </Link> */}
          <Link to="/cart">
            <Box p="2">
              <Flex alignItems="center">
                <Heading size="xs">$0</Heading>
                <Image
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  width="50px"
                  alt="bucket"
                />
              </Flex>
            </Box>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
