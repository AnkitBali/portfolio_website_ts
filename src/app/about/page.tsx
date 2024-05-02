"use client";

import {
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Spacer,
  Link,
  Heading,
  UnorderedList,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import { px } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const details = [
  {
    title1: "React Developer",
    title2: "",
    company: "Isha Foundation",
    location: "Coimbatore",
    date1: "June 2023 -",
    date2: "Feb 2024",
  },
  {
    title1: "Technical Analyst,",
    title2: "UI/UX Developer",
    company: "Isha Foundation",
    location: "Coimbatore",
    date1: "July 2022 -",
    date2: "June 2023",
  },
  {
    title1: "Back-end Developer",
    title2: "",
    company: "Famstar",
    location: "Chandigarh",
    date1: "Dec 2022 -",
    date2: "June 2022",
  },
];

export default function Page() {
  return (
    <Box
      position={"relative"}
      width={{ base: "100%", sm: "100%", md: "90%", lg: "80%", xl: "80%" }}
      textAlign={"left"}
      p={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      ml={{ base: "0px", md: "0px" }}
    >
      <Spacer mt={"120px"} />
      <VStack spacing={"50px"} alignItems="start">
        <Box
        // width={{"800px"}}
        >
          <AnimatePresence
          // mode="wait"
          >
            <motion.div
              initial={{ y: 20, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Heading mb={"40px"} color={"#42446E"} fontSize={"25px"}>
                About Me
              </Heading>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence
          // mode="wait"
          >
            <motion.div
              initial={{ y: 20, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Text>
                I&apos;m Ankit Bali, an experienced web developer with over
                three years of proficiency in React.js development. My
                commitment to excellence is evident through my continuous
                pursuit of expanding technical knowledge and skills. I stay
                updated with the latest trends by actively engaging in tech
                blogs and enrolling in relevant courses. Additionally, I possess
                exceptional English communication and adept team management
                skills. Let&apos;s collaborate to create exceptional digital
                solutions.
              </Text>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box
          // width={"800px"}
          width={{ base: "100%", md: "100%" }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Heading
              mt={"40px"}
              mb={"40px"}
              color={"#42446E"}
              fontSize={"25px"}
            >
              Work Experience
            </Heading>
          </motion.div>
          <VStack alignItems="start" spacing="10px">
            {details.map((detail) => (
              <>
                <HStack
                  // direction={{ base: "column", md: "row" }}

                  width={{ base: "100%", md: "100%" }}
                  spacing={{ base: "0px", md: "0px" }}
                  justifyContent={{ base: "flex-start", md: "" }}
                >
                  <VStack align={"start"} textAlign={"left"}>
                    <Flex
                      direction={{
                        base: "column",
                        sm: "column",
                        md: "row",
                      }}
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0.1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <Text
                          // width={{ base: "200px", md: "100%" }}
                          color={"#42446E"}
                          fontWeight="bold"
                        >
                          {detail.title1}
                        </Text>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0.1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <Text color={"#42446E"} fontWeight="bold">
                          {" "}
                          {detail.title2}
                        </Text>
                      </motion.div>
                    </Flex>
                    <Flex direction={{ base: "column", md: "row" }}>
                      <motion.div
                        initial={{ y: 20, opacity: 0.1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <HStack>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="16px"
                            viewBox="0 0 32 32"
                          >
                            <rect width="32" height="32" fill="none" />
                            <path
                              fill="currentColor"
                              d="M4 3v26h11v-4h2v4h11V3zm2 2h20v22h-7v-4h-6v4H6zm2 2v2h4V7zm6 0v2h4V7zm6 0v2h4V7zM8 11v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 15v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 19v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 23v2h4v-2zm12 0v2h4v-2z"
                            />
                          </svg>
                          <Text
                            mr={{ base: "0", sm: "0px", md: "15px" }}
                            fontSize={"sm"}
                          >
                            {detail.company}
                          </Text>
                        </HStack>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0.1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <HStack>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="16px"
                            viewBox="0 0 24 24"
                          >
                            <rect width="24" height="24" fill="none" />
                            <path
                              fill="currentColor"
                              d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                            />
                          </svg>
                          <Text fontSize={"sm"}> {detail.location}</Text>
                        </HStack>
                      </motion.div>
                    </Flex>
                  </VStack>
                  <Spacer />
                  <VStack align={"end"} textAlign={"end"}>
                    <motion.div
                      initial={{ y: 20, opacity: 0.1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Badge
                        borderRadius={"full"}
                        p={2}
                        px={4}
                        // ml={{ base: "10px", sm: "150px", md: "150px" }}
                        fontSize={"10px"}
                        colorScheme="green"
                      >
                        Full Time
                      </Badge>
                    </motion.div>

                    <HStack>
                      <motion.div
                        initial={{ y: 20, opacity: 0.1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="16px"
                          viewBox="0 0 20 20"
                        >
                          <rect width="20" height="20" fill="none" />
                          <path
                            fill="currentColor"
                            d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"
                          />
                        </svg>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0.1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <Flex
                          textAlign={"left"}
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text fontSize="sm">{detail.date1}</Text>
                          <Text
                            ml={{ base: "0px", sm: "5px", md: "5px" }}
                            fontSize={"sm"}
                          >
                            {" "}
                            {detail.date2}
                          </Text>
                        </Flex>
                      </motion.div>
                    </HStack>
                  </VStack>
                </HStack>

                <hr className="mb-[50px] custom-hr-about" />
              </>
            ))}
          </VStack>
        </Box>
        <Box width={"100%"}>
          <motion.div
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Heading
              mt={"-20px"}
              mb={"40px"}
              color={"#42446E"}
              fontSize={"25px"}
            >
              Education
            </Heading>
          </motion.div>
          <VStack width={{ base: "100%", md: "100%" }}>
            <HStack
              // mt={"50px"}
              // mb={'-30px'}
              width={{ base: "100%", md: "100%" }}
              spacing={{ base: "0px", md: "0px" }}
              justifyContent={{ base: "flex-start", md: "" }}
            >
              <VStack align={"start"} textAlign={"left"}>
                <motion.div
                  initial={{ y: 20, opacity: 0.1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Flex direction={{ base: "column", sm: "column", md: "row" }}>
                    <Text color={"#42446E"} fontWeight="bold">
                      Bachelor in Computer
                    </Text>
                    <Text
                      ml={{ base: "0px", sm: "0px", md: "5px" }}
                      color={"#42446E"}
                      fontWeight="bold"
                    >
                      Science Engineering
                    </Text>
                  </Flex>
                </motion.div>
                <Flex direction={{ base: "column", md: "row" }}>
                  <HStack>
                    <motion.div
                      initial={{ y: 20, opacity: 0.1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="16px"
                        viewBox="0 0 32 32"
                      >
                        <rect width="32" height="32" fill="none" />
                        <path
                          fill="currentColor"
                          d="M4 3v26h11v-4h2v4h11V3zm2 2h20v22h-7v-4h-6v4H6zm2 2v2h4V7zm6 0v2h4V7zm6 0v2h4V7zM8 11v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 15v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 19v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 23v2h4v-2zm12 0v2h4v-2z"
                        />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0.1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Flex
                        direction={{ base: "column", sm: "column", md: "row" }}
                        textAlign={"left"}
                      >
                        <Text
                          mr={{ base: "0", sm: "0px", md: "5px" }}
                          fontSize={"sm"}
                        >
                          Shri Mata Vaishno
                        </Text>
                        <Text fontSize={"sm"}>Devi University</Text>
                      </Flex>
                    </motion.div>
                  </HStack>

                  <HStack ml={{ base: "0px", sm: "0px", md: "10px" }}>
                    <motion.div
                      initial={{ y: 20, opacity: 0.1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="16px"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path
                          fill="currentColor"
                          d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                        />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0.1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Text fontSize={"sm"}>Jammu</Text>
                    </motion.div>
                  </HStack>
                </Flex>
              </VStack>
              <Spacer />
              <VStack
                align={"end"}
                // textAlign={"left"}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0.1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Badge
                    borderRadius={"full"}
                    p={2}
                    px={4}
                    ml={20}
                    fontSize={"10px"}
                    colorScheme="green"
                  >
                    Full Time
                  </Badge>
                </motion.div>
                <HStack>
                  <motion.div
                    initial={{ y: 20, opacity: 0.1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="16px"
                      viewBox="0 0 20 20"
                    >
                      <rect width="20" height="20" fill="none" />
                      <path
                        fill="currentColor"
                        d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"
                      />
                    </svg>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0.1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Flex
                      // width={"200px"}
                      textAlign={"left"}
                      direction={{ base: "column", sm: "row", md: "row" }}
                    >
                      <Text fontSize="sm">June 2018 - </Text>
                      <Text
                        ml={{ base: "0px", sm: "5px", md: "5px" }}
                        fontSize="sm"
                      >
                        June 2022
                      </Text>
                    </Flex>
                  </motion.div>
                </HStack>
              </VStack>
            </HStack>
            <hr className="custom-hr-about" />
          </VStack>
        </Box>
      </VStack>
      <style global jsx>
        {`
          .custom-hr-about {
            height: 1px;
            background-color: #ebeaed;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
    </Box>
  );
}
