import {
  CircularProgressLabel,
  Stack,
  HStack,
  VStack,
  Flex,
  CircularProgress,
  Box,
  Image,
  FormLabel,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Upload } from "./uploadingimage";

export function StudentProfile() {
  return (
    <div>
      <VStack direction={["column", "row"]} spacing="24px">
        <Upload />
        <Box
          borderRadius="lg"
          p={8}
          color="black.100"
          shadow="xl"
          w="85%"
          bgColor={useColorModeValue("gray.50", "gray.700")}
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>

              <InputGroup>
                <Input type="text" name="name" placeholder="Your Name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>College</FormLabel>

              <InputGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your college name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>ID</FormLabel>

              <InputGroup>
                <Input type="text" name="name" placeholder="Your Id no." />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Branch</FormLabel>

              <InputGroup>
                <Input type="text" name="name" placeholder="Your branch" />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <InputGroup>
                <Input type="email" name="email" placeholder="Your Email" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>

              <InputGroup>
                <Input type="text" name="name" placeholder="Your mobile no." />
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="blue"
              bg="cyan.400"
              color="white"
              _hover={{
                bg: "cyan.500",
              }}
            >
              Save Changes
            </Button>
          </VStack>
        </Box>
      </VStack>
    </div>
  );
}
