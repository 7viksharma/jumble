import {
  CircularProgressLabel,
  Stack,
  HStack,
  VStack,
  Flex,
  CircularProgress,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Wrap,
  WrapItem,
  Box,
  Image,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Text,
  Divider,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { SubjectSmall } from "./subjectsmall";
import { Link as RouterLink } from "react-router-dom";

export function StackBox() {
  return (
    <div>
      <Wrap spacing="30px" justify="center">
        <WrapItem>
          <Box
            w="181px"
            h="181px"
            boxShadow={useColorModeValue("xl", "dark-lg")}
            rounded="lg"
            bg={useColorModeValue("white", "gray.700")}
          >
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              rounded={10}
            />
          </Box>
        </WrapItem>
        <WrapItem>
          <RouterLink to="/profile">
            {" "}
            <Box
              w="920px"
              h="181px"
              boxShadow={useColorModeValue("xl", "dark-lg")}
              p="6"
              rounded="lg"
              bg={useColorModeValue("white", "gray.700")}
            >
              <Stat>
                <StatLabel>2019A7PS0013H</StatLabel>
                <StatNumber>Vatsal Nagelia</StatNumber>
                <StatHelpText>Computer Science</StatHelpText>
              </Stat>
              <Text>76%</Text>
              <Progress colorScheme="green" size="md" rounded="lg" value={76} />
            </Box>
          </RouterLink>
        </WrapItem>
        <WrapItem>
          <Box
            w="367px"
            h="250px"
            boxShadow="xl"
            p="6"
            rounded="lg"
            bg="#77826B"
          >
            {/* <VStack spacing={4} align="stretch">
              <SubjectSmall />
            </VStack> */}
            <HStack>
              <CircularProgress value={40} color="green.400" size={100}>
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                Machine Learning
              </Text>
            </HStack>
            <Text marginTop={20} fontSize={20} align="center" color="white">
              Mr. Paresh Saxena
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            w="367px"
            h="250px"
            boxShadow="xl"
            p="6"
            rounded="lg"
            bg="#cd8289"
          >
            <HStack>
              <CircularProgress value={77} color="green.400" size={100}>
                <CircularProgressLabel>77%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                International Business
              </Text>
            </HStack>
            <Text marginTop={20} fontSize={20} align="center" color="white">
              Mrs. Archana Srivastava
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            w="367px"
            h="250px"
            boxShadow="xl"
            p="6"
            rounded="lg"
            bg="#99d0ec"
          >
            <HStack>
              <CircularProgress value={83} color="green.400" size={100}>
                <CircularProgressLabel>83%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                Database Management System
              </Text>
            </HStack>
            <Text marginTop={20} fontSize={20} align="center" color="white">
              Mr. Gururaj
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            w="367px"
            h="250px"
            boxShadow="xl"
            p="6"
            rounded="lg"
            bg="#80689d"
          >
            <HStack>
              <CircularProgress value={35} color="green.400" size={100}>
                <CircularProgressLabel>35%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                Artificial Intelligence
              </Text>
            </HStack>
            <Text marginTop={20} fontSize={20} align="center" color="white">
              Mr. NL Bhanumurthy
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            w="367px"
            h="250px"
            boxShadow="xl"
            p="6"
            rounded="lg"
            bg="#4fc85b"
          >
            <HStack>
              <CircularProgress value={69} color="green.400" size={100}>
                <CircularProgressLabel>69%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                Operating System
              </Text>
            </HStack>
            <Text marginTop={20} fontSize={20} align="center" color="white">
              Mrs. Barsha Kumar
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            w="367px"
            h="250px"
            boxShadow="xl"
            p="6"
            rounded="lg"
            bg="#ffa0cd"
          >
            <HStack>
              <CircularProgress value={92} color="green.400" size={100}>
                <CircularProgressLabel>92%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                Design and Analysis of Algorithm
              </Text>
            </HStack>
            <Text marginTop={20} fontSize={20} align="center" color="white">
              Mr. Tathagata Ray
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
      {/* <Stack direction={["column", "row"]} spacing="24px">
        <Box w="180px" h="180px" bg="yellow.200">
          1
        </Box>
        <Box w="920px" h="180px" bg="tomato">
          2
        </Box>
        <Box w="550px" h="400px" bg="pink.100">
          3
        </Box>
        <Box w="550px" h="400px" bg="pink.100">
          4
        </Box>
      </Stack> */}
    </div>
  );
}
