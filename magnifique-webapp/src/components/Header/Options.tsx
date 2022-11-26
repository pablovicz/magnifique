import { Button, Center, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';
import { TbLogout } from 'react-icons/tb';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { useSidebarDrawer } from "../../services/hooks/useSidebarDrawer";

export function Options() {

    const { onOpen } = useSidebarDrawer();

    function handleSidebarOpen() {
        onOpen();
    };

    const navigate = useNavigate();

    return (
        <HStack>
            <Menu colorScheme='whiteAlpha'>
                <MenuButton
                    as={IconButton}
                    aria-label='Notifications'
                    icon={
                        <Icon
                            as={IoMdNotificationsOutline}
                            _hover={{ color: 'mag.brown' }}
                            fontSize='1.5rem'
                            color='white'
                        />
                    }
                    variant='unstyled'
                />
                <MenuList>
                    <MenuItem isDisabled={true} _disabled={{ color: 'mag.brown' }}>
                        <Text as='span'>
                            Nenhuma notificação
                        </Text>
                    </MenuItem>

                </MenuList>
            </Menu>
            <Menu colorScheme='whiteAlpha'>
                <MenuButton
                    as={IconButton}
                    aria-label='Settings'
                    icon={
                        <Icon
                            as={AiOutlineSetting}
                            fontSize='1.5rem'
                            color='white'
                            _hover={{ color: 'mag.brown' }}
                        />
                    }
                    variant='unstyled'
                />
                <MenuList>
                    <MenuItem
                        onClick={() => navigate('/perfil')}
                        isDisabled
                        bg='transparent'
                        color='mag.secondary'
                        fontWeight='normal'
                        _hover={{
                            color: 'mag.primary',
                            fontWeight: 'semibold',
                            bg: 'mag.light'
                        }}
                    >
                        <HStack align='center'>
                            <Icon as={FaUserCog} fontSize='1.5rem' />
                            <Text as='span' w='100%' textAlign='left' >
                                Perfil
                            </Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem
                        onClick={() => navigate('/')}
                        bg='transparent'
                        color='mag.secondary'
                        fontWeight='normal'
                        _hover={{
                            color: 'mag.primary',
                            fontWeight: 'semibold',
                            bg: 'mag.light'
                        }}
                    >
                        <HStack align='center'>
                            <Icon as={TbLogout} fontSize='1.5rem' />
                            <Text as='span' w='100%' textAlign='left' >
                                Sair
                            </Text>
                        </HStack>
                    </MenuItem>
                </MenuList>
            </Menu>
            <IconButton
                aria-label="Menu"
                size='md'
                w='30px'
                variant='unstyled'
                onClick={handleSidebarOpen}
                icon={
                    <Icon
                        as={HiOutlineMenuAlt3}
                        fontSize='1.5rem'
                        color='white'
                        _hover={{ color: 'mag.brown' }}
                    />
                }
            />
        </HStack>
    );
}