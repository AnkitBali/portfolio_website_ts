"use client";

import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TopBanner: React.FC = () => {
  // return <></>;
  return (
    <>
      <Flex
        px={{ base: "30px", sm: "20px", md: "70px", lg: "100px" }}
        mt={{ base: "150px", sm: "150px", md: "120px", lg: "150px" }}
        direction={{ base: "column", sm: "row", md: "row" }}
        align="center"
        justifyContent={"space-between"}
        justify="center"
        //   spacing={26}
      >
        <Box
          // spacing={16}
          position="relative"
          // top="50%"
          // left={{base:"35%", sm:"35%", md:"45%", lg:"30%"}}
          // transform="translateX(-50%)"
          // alignContent={{ base: 'center', sm: 'left', md: 'left' }}
          // textAlign={{ base: 'center', md: 'left' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
              // mt={'150px'}
              // width={{base: '300px', sm: '300px', md: '500px'}}
              >
                <Flex
                  direction={{ base: "column", md: "column" }}
                  // align={{base: 'center', md: 'left'}}
                >
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "31px", sm: "35px", md: "35px" }}
                    color="#42446E"
                  >
                    Hi 👋,
                  </Text>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "31px", sm: "35px", md: "35px" }}
                    color="#42446E"
                  >
                    My name is
                  </Text>
                </Flex>
                <Text
                  fontSize={{ base: "31px", sm: "35px", md: "35px" }}
                  bgGradient="linear(to-r, #E70FAA 0%, #00C0FD 40%)"
                  bgClip="text"
                  fontWeight="bold"
                  ml={{ base: "0px", md: "0px" }}
                >
                  Ankit Bali
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "31px", sm: "35px", md: "35px" }}
                  color="#42446E"
                >
                  I build things for web
                  {/* and mobile // for case when I start to build apps as well */}
                  <br />
                </Text>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
        {/* <Spacer /> */}
        <Box
          mt={{ base: "50px", sm: "0px", md: "0px" }}
          //   mr={{base: '50px', sm:'50px', md: '100px'}}
          // px={{base:'10px', sm:'20px', md:'30px', lg: '40px'}}
          // py={{base: '-100px', sm:'20px'}}
          // my={{base: '-100px', sm: '0px', md: '0px'}}
        >
          <Box
            // id={{base:"", sm:"", md:"xyz"}}
            id="xyz"
            // width={{ base: '20px', sm: '250px', md: '300px' }} // Adjust container size
            // height={{ base: '10px', sm: '200px', md: '300px' }} // Adjust container size
            borderRadius="full"
          >
            <Image
              id="abc"
              // id={{base:"", sm:"", md:"xyz"}}
              // borderRadius={'full'}
              style={{
                borderRadius: "100%",
                // border: '1px solid #fff',
              }}
              // layout="responsive"
              // width={{ base: '150', sm: '200', md: '250' }} // Adjust image size
              // height={{ base: '100', sm: '150', md: '200' }}
              width="250"
              height="250"
              src="/dpImg6.jpeg"
              objectFit="cover" // Ensure the image fills the circular box
              alt={""}
            />
          </Box>
        </Box>
      </Flex>
      <style global jsx>
        {`
        #abc{
          background: -webkit-linear-gradient(left top, #E70FAA 0%, #00C0FD 100%);
  width: 200px
  height : 200px
  border-radius: 100px;
  padding: 6px;
        }
        #xyz{
            width: 200px
  height : 200px
            background: black;
  
  border-radius: 100px;
        }
        `}
      </style>
    </>
  );
};

export default TopBanner;
