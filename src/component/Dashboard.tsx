// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/Card/Card.js";
import BarChart from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/Charts/BarChart";
import LineChart from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/Charts/LineChart";
import IconBox from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/Icons/Icons.js";
import React from "react";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/variables/charts";

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "10px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="20px" mb="20px">
        <Card
          minH="125px"
          shadow={useColorModeValue("xl", "dark-lg")}
          rounded="lg"
          bgColor={useColorModeValue("white", "gray.800")}
        >
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                  alignItems="center"
                >
                  Quiz 4
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    70
                  </StatNumber>
                </Flex>
              </Stat>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +5%{" "}
              </Text>
              from average
            </Text>
          </Flex>
        </Card>
        <Card
          minH="125px"
          shadow={useColorModeValue("xl", "dark-lg")}
          rounded="lg"
          bgColor={useColorModeValue("white", "gray.800")}
        >
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto" alignContent="20px">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Quiz 3
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    45
                  </StatNumber>
                </Flex>
              </Stat>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="red.500" fontWeight="bold">
                -15%{" "}
              </Text>
              from average
            </Text>
          </Flex>
        </Card>
        <Card
          minH="125px"
          shadow={useColorModeValue("xl", "dark-lg")}
          rounded="lg"
          bgColor={useColorModeValue("white", "gray.800")}
        >
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Quiz 2
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    67
                  </StatNumber>
                </Flex>
              </Stat>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="red.500" fontWeight="bold">
                -13%{" "}
              </Text>
              from average
            </Text>
          </Flex>
        </Card>
        <Card
          minH="125px"
          shadow={useColorModeValue("xl", "dark-lg")}
          rounded="lg"
          bgColor={useColorModeValue("white", "gray.800")}
        >
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Quiz 1
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    50
                  </StatNumber>
                </Flex>
              </Stat>
              {/* <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox> */}
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +7%{" "}
              </Text>
              from average
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap="20px"
      >
        <Card
          bg={
            colorMode === "dark"
              ? "navy.800"
              : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          }
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
          shadow={useColorModeValue("xl", "dark-lg")}
          rounded="lg"
        >
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
              Performance
            </Text>
            <Text color="white" fontSize="lg" fontWeight="bold">
              in Percentage
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </Box>
        </Card>
        <Card
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
          shadow={useColorModeValue("xl", "dark-lg")}
          rounded="lg"
        >
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
              Performance
            </Text>
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              in Percentile
            </Text>
          </Flex>
          <Box minH="300px">
            <BarChart chartData={barChartData} chartOptions={barChartOptions} />
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
