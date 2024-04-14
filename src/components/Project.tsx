import {
  Box,
  Button,
  Collapse,
  Grid,
  HStack,
  Image,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text,
  useColorMode,
  useDisclosure
} from "@chakra-ui/react";
import { ExternalLink } from "lucide-react";
import { ReactNode, useState } from "react";
import Description from "./Description";

interface ProjectProps {
  name: string;
  description: string;
  imageLink: string;
  githubLink: string;
  job: { icon: ReactNode; detail: string }[];
}

const Project = ({
  name,
  description,
  githubLink,
  imageLink,
  job
}: ProjectProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Stack
      gap={3}
      onMouseEnter={() => {
        onToggle();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        onToggle();
        setIsHovered(false);
      }}
    >
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          fontWeight="bold"
        >
          {name}
        </Text>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border={colorMode === "light" ? "1.5px solid" : "none"}
          overflow="hidden"
        >
          <Image
            src={imageLink}
            minH={{ base: "225px", md: "300px", lg: "285px" }}
            minW="100px"
            transition="transform 0.3s ease"
            transform={isHovered ? `scale(1.3)` : ""}
            filter={isHovered ? "blur(3px)" : ""}
          />
          <Box position="absolute">
            <Collapse in={isOpen}>
              <Link
                _hover={{ textDecor: "none" }}
                fontWeight="bold"
                href={githubLink}
                target="_blank"
              >
                <Button
                  size={{ base: "sm", md: "lg", lg: "lg" }}
                  bgColor={colorMode === "light" ? "orange" : "orange.300"}
                  color={colorMode === "dark" ? "black" : ""}
                  borderRadius={0}
                  _hover={{
                    bgColor: colorMode === "light" ? "orange.300" : "orange.200"
                  }}
                  display={isHovered ? "" : "none"}
                  rightIcon={<ExternalLink height="18px" />}
                >
                  View Live
                </Button>
              </Link>
            </Collapse>
          </Box>
        </Box>
      </Box>
      <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          {job.map((item, index) => (
            <Tag
              key={index}
              size={{ base: "md", md: "lg", lg: "lg" }}
              variant={colorMode === "light" ? "outline" : "subtle"}
              colorScheme="orange"
              borderRadius={0}
            >
              <TagLabel>
                <HStack>
                  {item.icon}
                  <Text>{item.detail}</Text>
                </HStack>
              </TagLabel>
            </Tag>
          ))}
        </Grid>
      </Box>
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "lg", md: "xl", lg: "xl" }}
          fontWeight="bold"
          color={colorMode === "light" ? "black" : "orange.200"}
        >
          Description
        </Text>
        <Description text={description} />
      </Box>
    </Stack>
  );
};

export default Project;
