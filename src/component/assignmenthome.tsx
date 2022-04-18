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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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

  const { isOpen, onOpen, onClose } = useDisclosure();
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
          onClick={onOpen}
        >
          Submit
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Assignment Question</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Add File
              </Button>
              <Button variant="ghost" colorScheme="red">
                Remove file
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </Stack>
  );
};
// function BasicUsage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             nfreferfergnjnoiinio
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant="ghost">Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
const AssignmentHome = () => {
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
              <Text color="cyan.400">Upcoming Assignments</Text>
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
          title={"file type: .pdf, .doc"}
          checked={true}
          typePlan="Database Management System"
          options={options}
        />
        <Divider />
        <PackageTier
          title={"file type: .pdf, .doc"}
          typePlan="International Business"
          options={options}
        />
        <Divider />
        <PackageTier
          title={"file type: .c"}
          typePlan="Design and Analysis of Algorithm"
          options={options}
        />
      </Stack>
    </Box>
  );
};

export default AssignmentHome;
