import {
  CircularProgressLabel,
  Stack,
  HStack,
  VStack,
  Flex,
  CircularProgress,
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

export function StackBox() {
  return (
    <div>
      <Wrap spacing="30px" justify="center">
        <WrapItem>
          <Box w="181px" h="181px" boxShadow="xl" rounded="lg" bg="white">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              rounded={10}
            />
          </Box>
        </WrapItem>
        <WrapItem>
          <Box w="920px" h="181px" boxShadow="xl" p="6" rounded="lg" bg="white">
            <Stat>
              <StatLabel>2019A7PS0013H</StatLabel>
              <StatNumber>Vatsal Nagelia</StatNumber>
              <StatHelpText>Computer Science</StatHelpText>
            </Stat>
            <Progress colorScheme="green" size="md" rounded="lg" value={20} />
          </Box>
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
            <CircularProgress value={40} color="green.400" size={100}>
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
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
            <CircularProgress value={40} color="green.400" size={100}>
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
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
            <CircularProgress value={40} color="green.400" size={100}>
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
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
              <CircularProgress value={40} color="green.400" size={100}>
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>

              <Text fontSize={25} align="center" color="white">
                Machine Learning
              </Text>
            </HStack>
            <Text fontSize={20} align="center" color="white">
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
            bg="white"
          ></Box>
        </WrapItem>
        <WrapItem>
          <Box w="367px" h="250px" boxShadow="xl" p="6" rounded="lg" bg="white">
            <CircularProgress value={40} color="green.400" size={100}>
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
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
