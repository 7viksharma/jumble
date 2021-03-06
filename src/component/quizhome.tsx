import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const options = [{ id: 1, desc: "23/04/2022" }];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "cyan.600";
  const bgColorLight = checked ? "cyan.400" : "gray.300";

  const colorTextDark = checked ? "white" : "cyan.500";
  const bgColorDark = checked ? "cyan.400" : "gray.200";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon
              as={AiOutlineCalendar}
              // color={useColorModeValue("gray.100", "gray.900")}
            />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          Start
        </Button>
      </Stack>
    </Stack>
  );
};
const QuizHome = () => {
  return (
    <Box py={6} px={5} minW={"100vh"}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              <Text color="cyan.400">Upcoming Quizzes</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>Intro Text</Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier
          title={"1300"}
          checked={true}
          typePlan="Machine Learning"
          options={options}
        />
        <Divider />
        <PackageTier
          title={"1100"}
          typePlan="Artificial Intelligence"
          options={options}
        />
        <Divider />
        <PackageTier
          title={"1500"}
          typePlan="Operating System"
          options={options}
        />
      </Stack>
    </Box>
  );
};

export default QuizHome;
