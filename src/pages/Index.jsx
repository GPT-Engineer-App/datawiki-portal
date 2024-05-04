import { Box, Button, Container, Flex, Heading, Image, Text, VStack, Fade, useDisclosure } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });

  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={8} align="stretch">
        <Box bg="blue.500" p={10} color="white" textAlign="center">
          <Heading as="h1" size="2xl" fontFamily="Bebas Neue">
            DataWiki
          </Heading>
          <Text mt={4} fontSize="xl" fontFamily="Bebas Neue">
            Your ultimate data analysis toolkit
          </Text>
          <Image src="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTcxNDg1MjExMHww&ixlib=rb-4.0.3&q=80&w=1080" mt={4} />
        </Box>

        <VStack spacing={5} p={10}>
          <Fade in={isOpen} style={{ transitionDelay: "0.3s" }}>
            <Text fontSize="2xl" fontFamily="Bebas Neue">
              Real-time Data Processing
            </Text>
            <Text fontFamily="Bebas Neue">Experience the power of real-time data processing to make faster, informed decisions.</Text>
          </Fade>
          <Fade in={isOpen} style={{ transitionDelay: "0.6s" }}>
            <Text fontSize="2xl" fontFamily="Bebas Neue">
              Scalable Infrastructure
            </Text>
            <Text fontFamily="Bebas Neue">Our platform scales with your needs, from small projects to enterprise-level data analysis.</Text>
          </Fade>
          <Fade in={isOpen} style={{ transitionDelay: "0.9s" }}>
            <Text fontSize="2xl" fontFamily="Bebas Neue">
              Advanced Analytics
            </Text>
            <Text fontFamily="Bebas Neue">Utilize advanced analytics tools to uncover trends and patterns that matter.</Text>
          </Fade>
        </VStack>

        <Flex direction="column" align="center" p={10}>
          <Text fontSize="2xl" fontFamily="Bebas Neue" mb={4}>
            Data Analysis for Beginners
          </Text>
          <Text fontFamily="Bebas Neue" mb={4}>
            Learn about data analysis methods that can help you start your journey in the world of data.
          </Text>
          <Image src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGRhdGElMjBhbmFseXNpcyUyMGZvciUyMGJlZ2lubmVyc3xlbnwwfHx8fDE3MTQ4NTUwNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Flex>

        <Flex direction="column" align="center" bg="blue.100" p={10}>
          <Text fontSize="2xl" fontFamily="Bebas Neue" mb={4}>
            Want to get started?
          </Text>
          <Button leftIcon={<FaGoogle />} colorScheme="blue" fontFamily="Bebas Neue" onClick={onToggle}>
            Get Started
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
