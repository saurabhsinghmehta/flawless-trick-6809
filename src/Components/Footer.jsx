import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer_logo from "../Assets/Footer_logo.png";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import PlayStore_logo from "../Assets/PlayStore_logo.png";
// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      style={{ color: "white", backgroundColor: "#202124", fontSize: ".8rem" }}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 7 }} spacing={1}>
          <div style={{ width: "50%", minWidth: "768" }}>
            <a href="#">
              {/* <img src={Footer_logo} alt="PlayStore_logo" /> */}
            </a>
          </div>
          <div style={{ width: "50%" }}>
            <a href="#">
              <img src={Footer_logo} alt="PlayStore_logo" />
            </a>
          </div>
          <Stack align={"flex-start"} style={{ fontSize: ".7rem" }}>
            <ListHeader>BFC Food</ListHeader>
            <Link href={"#"}>Menu</Link>
            <Link href={"#"}>Order Lookup</Link>
            <Link href={"#"}>Gift Card</Link>
            <Link href={"#"}>Nutrition & Allergen</Link>
          </Stack>

          <Stack align={"flex-start"} style={{ fontSize: ".7rem" }}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Get Help</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>BFC Feedback</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>

          <Stack align={"flex-start"} style={{ fontSize: ".7rem" }}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Term and Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Disclaimer</Link>
            <Link href={"#"}>Caution Notice</Link>
          </Stack>
          <Stack align={"flex-start"} style={{ fontSize: ".7rem" }}>
            <ListHeader>BFC India</ListHeader>
            <Link href={"#"}>About BFC</Link>
            <Link href={"#"}>BFC Care</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Our Golden Past</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge /> */}
            <div style={{ width: "50%" }}>
              <a href="#">
                <img src={PlayStore_logo} alt="PlayStore_logo" />
              </a>
            </div>
            {/* <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={1}
          justify={{ md: "space-around" }}
          align={{ md: "center" }}
        >
          <Text style={{ fontSize: ".5rem" }}>
            Copyright © KFC Corporation 2021 All Rights Reserved
          </Text>
          <Stack direction={"row"} spacing={1}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
