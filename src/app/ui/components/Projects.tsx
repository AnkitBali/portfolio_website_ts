"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const projects = [
  {
    title: "Free Tamil Nadu's Temples Website",
    description:
      "This website, developed using Next.js and React.js, stands as a digital cornerstone supporting the global movement for the freedom of Tamil Nadu temples. Through the utilization of advanced JavaScript techniques and a diverse range of meticulously crafted components, it aims to raise awareness and preserve the rich cultural heritage. Explore the various features thoughtfully integrated to champion this noble cause and foster community engagement.",
    image: "/freeTNT.png",
    liveLink: "https://free-tn-temples.netlify.app/",
    githubLink: "https://github.com/AnkitBali/FreeTNTemples-Website",
  },
  {
    title: "Dashboard App with CRUD Operations",
    description:
      " This app is designed to help users manage their invoices. It is built using Next.js and Chakra UI, and uses a PostgreSQL database. The user can login with their login ID: user@nextmail.com, Password: 123456, and proceed to login to the dashboard and perform CRUD operations in the Invoices table.",

    image: "/nextjs-dashboard.png",
    liveLink: "https://dashboard-app-khaki-two.vercel.app/login",
    githubLink: "https://github.com/AnkitBali/dashboard-app",
  },
  // {
  //   title: "Amita Care Website",
  //   description:
  //     "This website serves as a platform for mental health therapy, offering a range of services including counseling sessions and additional support. It is built on the WordPress framework and utilizes a variety of third-party plugins to enhance its functionality. These plugins enable features such as appointment scheduling, secure communication channels, and interactive resources to facilitate effective therapy sessions and support for visitors.",
  //   image: "/amitacare.png",
  //   liveLink: "https://www.amitacare.com/",
  //   githubLink: null,
  // },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <>
      <Box id="projects"></Box>
      <Spacer mt={{ base: "100px", md: "120px" }} />
      <Box textAlign={"center"} position={"relative"}>
        <Heading color={"#42446E"} fontSize={{ base: "35px", md: "35px" }}>
          Projects
        </Heading>

        <Text
          color={"#666666"}
          fontSize={{ base: "27px", md: "32px" }}
          mt={"20px"}
          mb={"20px"}
        >
          Things I have built so far
        </Text>

        <Flex mt={0} flexWrap="wrap" justify={"center"}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              p={4}
              m={4}
              boxShadow="md"
              borderRadius="md"
              maxW="300px"
              w="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Image
                  width={300}
                  height={200}
                  src={project.image}
                  alt={project.title}
                  //  borderRadius="md"
                />
                <Heading as="h3" size="md" mt={4} mb={2}>
                  {project.title}
                </Heading>
                <Text textAlign={"left"} fontSize="sm" color="gray.600" mb={4}>
                  {project.description}
                </Text>
              </Box>

              <Flex justify="space-between" alignItems="center">
                <HStack spacing={"4px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      fill="#616161"
                      d="M136.37 187.53a12 12 0 0 1 0 17l-5.94 5.94a60 60 0 0 1-84.88-84.88l24.12-24.11A60 60 0 0 1 152 99a12 12 0 1 1-16 18a36 36 0 0 0-49.37 1.47l-24.1 24.08a36 36 0 0 0 50.92 50.92l5.94-5.94a12 12 0 0 1 16.98 0m74.08-142a60.09 60.09 0 0 0-84.88 0l-5.94 5.94a12 12 0 0 0 17 17l5.94-5.94a36 36 0 0 1 50.92 50.92l-24.11 24.12A36 36 0 0 1 120 139a12 12 0 1 0-16 18a60 60 0 0 0 82.3-2.43l24.12-24.11a60.09 60.09 0 0 0 .03-84.91Z"
                    />
                  </svg>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"sm"}
                    decoration={"underline"}
                  >
                    <a target="_blank" href={project.liveLink}>
                      {" "}
                      Live Preview{" "}
                    </a>
                  </Text>
                </HStack>
                {project.githubLink && (
                  <HStack
                  //    colorScheme="green"
                  //    size="sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>

                    <Text
                      fontWeight={"bold"}
                      fontSize={"sm"}
                      decoration={"underline"}
                    >
                      {" "}
                      <a target="_blank" href={project.githubLink}>
                        View Code{" "}
                      </a>{" "}
                    </Text>
                  </HStack>
                )}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Projects;
