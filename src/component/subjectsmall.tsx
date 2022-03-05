import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

//export function SubjectSmall() {
export function SubjectSmall() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen} colorScheme="teal" variant="ghost">
        Subject 1
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CS F### Subject 1</ModalHeader>
          <ModalCloseButton />
          <ModalBody>frfr3f rf3ref rrfn3rf r3fr4 frnf4f 4t</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
