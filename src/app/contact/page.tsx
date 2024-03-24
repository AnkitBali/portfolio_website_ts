"use client";

import {
  Box,
  Text,
  Flex,
  HStack,
  Spacer,
  Link,
  Heading,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Spacer mt={"200px"} />
      <Box
        position={"relative"}
        textAlign={"center"}
        // p={"50px"}
        //   ml={"50px"}
      >
        <Heading
          mb={"20px"}
          color={"#42446E"}
          fontSize={{ base: "25px", sm: "30px", md: "40px", lg: "45px" }}
        >
          For any questions please mail at :{" "}
        </Heading>
        <Text
          as="span"
          fontSize={{ base: "25px", sm: "30px", md: "40px", lg: "45px" }}
          bgGradient="linear(to-r, #E70FAA 10%, #E70FAA 20%, #00C0FD 60%, #00C0FD 40%)"
          bgClip="text"
          fontWeight="bold"
        >
          <a target="_blank" href="mailto:ankitbali.webdev@gmail.com">
            ankitbali.webdev@gmail.com{" "}
          </a>
        </Text>
      </Box>
    </>
  );
}
