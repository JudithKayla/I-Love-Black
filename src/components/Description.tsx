import { useState } from "react";
import { Box, Button, Collapse, useColorMode } from "@chakra-ui/react";

const Description = ({ text }: { text: string }) => {
  const { colorMode } = useColorMode();
  const [showMore, setShowMore] = useState(false);
  const firstHalf = text.slice(0, 185);
  const secondHalf = text.slice(186);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box whiteSpace="pre-line">
      {firstHalf}
      <Collapse in={showMore} animateOpacity>
        {secondHalf}
      </Collapse>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleShowMore}
        _hover={{ color: "orange" }}
        color={colorMode === "light" ? "black" : "orange.200"}
      >
        {showMore ? "Read Less" : "...Read More"}
      </Button>
    </Box>
  );
};

export default Description;
