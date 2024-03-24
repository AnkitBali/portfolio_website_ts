import Image from "next/image";
import TopBanner from "./ui/components/TopBanner";
import { ChakraProvider } from "@chakra-ui/react";

import TechStack from "./ui/components/TechStack";
import Projects from "./ui/components/Projects";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <TopBanner />
        <TechStack />
        <Projects />
      </ChakraProvider>
    </>
  );
}
