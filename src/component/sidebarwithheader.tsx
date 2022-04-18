import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { Children } from "react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeToggler from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/component/colortoggle";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, url: "/home" },
  { name: "Performance", icon: FiTrendingUp, url: "/performance" },
  { name: "Quizzes", icon: FiCompass, url: "/quizzes" },
  { name: "Assignments", icon: FiStar, url: "/home" },
  { name: "Settings", icon: FiSettings, url: "/home" },
];

export function SidebarWithHeader({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bgColor={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAABGdpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMi0wNC0xNzwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4xMjQ2MTAzNy02YWE5LTQyOTEtODVlNS1kOThmOTRmMmYzZTI8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+SlVNQkxFPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlv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" />
          {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.url}>
          {/* <NavItem key={link.name} icon={link.icon} url={link.url}></NavItem> */}
          {/* <RouterLink to={link.url}>{link.name}</RouterLink> */}
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: string;
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <ColorModeToggler />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={"https://bit.ly/dan-abramov"} />
                {/* <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              rounded={10}
            /> */}
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Vatsal Nagelia</Text>
                  <Text fontSize="xs" color="gray.600">
                    Student
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <RouterLink to="/profile">Profile</RouterLink>
              </MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>
                <RouterLink to="/performance">Performance</RouterLink>
              </MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
