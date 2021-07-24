import React, { useContext, useState } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { UserContext } from '../contexts/UserContext';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({ children, to = "/" }) => {
  return (
      <Link
          px={2}
          py={1}
          rounded="md"
          _hover={{ textDecoration: 'none' }}
          to={to}
          as={RouterLink}
        >
        {children}
    </Link>
  )
}

const Links = () => (
    <>
        <NavLink to="/resources">Free resources</NavLink>
        <NavLink to="/support">Support Channels</NavLink>
    </>
)

const Header = () => {
    const user = useContext(UserContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [xp, setXP] = useState(user.getStoredXP());
    if (!user.name) return null;

    return (
        <Box bg="green.500">
           <Flex h={16} alignItems="center" justifyContent="space-between"  bg="green.500" px={4}>
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    bg="green.500"
                    _hover={{ bg: 'green.500' }}
                    borderRadius="8px"
                />
                <HStack spacing={8} alignItems="center">
                    <Box>
                         <RouterLink to="/">
                            <Text fontSize="2xl" fontWeight="bold">
                                Hillgrove Python Course
                            </Text>
                        </RouterLink>
                    </Box>
                    <HStack
                        as="nav"
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Links/>
                    </HStack>
                </HStack>
                <Flex alignItems="center">
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded="full"
                            variant="link"
                            cursor="pointer"
                            onClick={() => setXP(user.getStoredXP())}
                        >
                            <Avatar
                                size="md"
                                alt="Profile avatar"
                                aria-label="Profile"
                                src={user.avatar}
                            />
                        </MenuButton>
                    <MenuList>
                        <MenuItem>XP: {xp}</MenuItem>
                        <MenuDivider />
                        <MenuItem as={RouterLink} to="/logout">Logout</MenuItem>
                    </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        
            {isOpen && (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as="nav" spacing={4}>
                        <Links/>
                    </Stack>
                </Box>
            )}
        </Box>
    )
};

export default Header;