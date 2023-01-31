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
  Button,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Icon
} from "@chakra-ui/react";
import ProjectLogo from "../Assets/ProjectLogo.png";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 550px)");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  const Sec = [
    {
      id: 1,
      txt: "Menu",
      links: "/menu"
    },
    {
      id: 2,
      txt: "Deals",
      links: "/deals"
    }
  ];

  return (
    <Box border="1px solid">
      {isLargerThan600? ( <Container
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
              <Button onClick={handleLogout} colorScheme="red" >
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
      </Container>):(
        // MOBILE SCREEN
        <Box borderBottom={"1px"} borderColor={"gray.400"}>
          <Flex justifyContent={"space-between"}>
            <Flex gap={2}>
              <Box m={1} ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <Icon as={BsList} w={7} h={7} />
              </Box>
              <Box m={1}>
              <Link to="/"><Image
                  src={ProjectLogo}
                  width={"70px"}
                  height={"70px"}
                /></Link>
              </Box>
            </Flex>
            <Box>
              <Button m={5} size="sm" _hover={{}}>
                <Flex>
                  <Link to="/cart">
                      <Image
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  width="50px"
                  alt="bucket"
                />
                  </Link>
                  <Text color={"white"} fontSize={"13px"}>
                    {/* count  */}
                  </Text>
                </Flex>
              </Button>
              {/* Drawer  */}
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  {/* User  */}
                  <DrawerHeader>
                    <Flex
                      gap={2}
                      borderBottom={"1px"}
                      borderColor={"gray.400"}
                      pb={5}
                    >
                      <Box>
                        <Link to={"/"}>
                          <Image
                            borderRadius={100}
                            width={"70px"}
                            src="https://support.discord.com/hc/user_images/l12c7vKVRCd-XLIdDkLUDg.png"
                          />
                        </Link>
                      </Box>
                      <Flex m={2} flexDirection={"column"}>
                        <Box>
                          <Text>Hey 👋</Text>
                        </Box>
                        <Box>
                          <Text>{namee}</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    {/* Pages Link  */}
                    <Flex
                      flexDirection={"column"}
                      gap={8}
                      borderBottom={"2px"}
                      pb={10}
                      borderColor={"gray.300"}
                    >
                      {Sec.map((post) => (
                        <Link to={post.links} key={post.id}>
                          <Flex flexDirection={"row"} gap={6}>
                            {/* <Icon as={post.icon} w={6} h={6} /> */}
                            <Text fontSize={"18px"}>{post.txt}</Text>
                          </Flex>
                        </Link>
                      ))}
                    </Flex>
                    <Flex mt={5} alignItems={"end"}>
                      {/* {Third.map((post, i) => (
                        <Button
                          key={post.id}
                          m={1}
                          size="md"
                          _hover={{}}
                          bgColor={"rgb(255,111,97)"}
                        >
                          <Text color={"white"} fontSize={"13px"}>
                            {post.txt}
                          </Text>
                        </Button>
                      ))} */}


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
              <Button onClick={handleLogout} colorScheme="red" >
                Log Out
              </Button>
              </Heading>
            </Flex>
          </Box>
          }
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </Box>
      )}
    
    </Box>
  );
};

export default Navbar;
