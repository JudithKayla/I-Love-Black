import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { navlinks } from "../data/data";
import { Flex, Stack, Box, Image, Text, useColorMode } from "@chakra-ui/react";

interface NavLinkProps {
  name: string;
  to: string;
}

const NavLink = ({ name, to }: NavLinkProps) => {
  return (
    <Link to={to}>
      <Text
        as="a"
        fontSize="xs"
        fontWeight="bold"
        _hover={{ borderBottom: "2px solid orange", color: "orange" }}
        href={name === "RESUME" || name === "CERTIFICATION" ? to : ""}
        target={
          name === "RESUME" || name === "CERTIFICATION" ? "_blank" : "_self"
        }
      >
        {name}
      </Text>
    </Link>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex minH="100px" alignItems="center">
      <Link to="/">
        <Text
          ml="50px"
          fontSize="md"
          fontWeight="extrabold"
          fontFamily="sans-serif"
          _hover={{ textDecoration: "none", color: "orange" }}
          display={{ base: "none", md: "inline", lg: "inline" }}
        >
          Judith C.
        </Text>
      </Link>
      <Box
        ml="30px"
        alignItems="center"
        position="absolute"
        display={{ base: "inline", md: "none", lg: "none" }}
      >
        <Link to="/">
          <Image src="././bolt.png" />
        </Link>
      </Box>
      <Stack direction="row" gap={3} ml="100px">
        {navlinks.map((navlink, index) => (
          <Box key={index}>
            <NavLink name={navlink.name} to={navlink.to} />
          </Box>
        ))}
      </Stack>
      <Box
        ml="25px"
        cursor="pointer"
        _hover={{ color: "orange" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <Moon height="18px" /> : <Sun />}
      </Box>
    </Flex>
  );
};

export default Navbar;
