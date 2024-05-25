import { useState } from "react";
import { Box, Text, Button, Collapse, useColorMode } from "@chakra-ui/react";

const Description = ({ text }: { text: string }) => {
  const { colorMode } = useColorMode();
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box as={Text} whiteSpace="pre-line" color="gray"
      fontFamily="sans-serif"
      fontWeight="thin"
      lineHeight="1.8"
      fontSize={{ base: "sm", md: "md", lg: "md" }}>
      {showMore ? text : `${text.slice(0, 185)}...`}
      <Collapse in={showMore} animateOpacity>
        {showMore ? "" : text.slice(185)}
      </Collapse>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleShowMore}
        _hover={{ color: "orange" }}
        color={colorMode === "light" ? "black" : "orange.200"}
      >
        {showMore ? "Read Less" : "Read More"}
      </Button>
    </Box>
  );
};

export default Description;
