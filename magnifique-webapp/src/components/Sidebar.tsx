
import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Img, Text,  VStack } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';
import { NavLink } from "./utils/NavLink";
import { ReactNode } from "react";
import { TbLogout } from "react-icons/tb";
import { useSidebarDrawer } from "../services/hooks/useSidebarDrawer";
import { theme } from "../theme/theme";


export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer();
    const navigate = useNavigate();


    const navigation_items = [
        {
            title: 'Meu perfil',
            icon: <Img src='' alt="FiUserCheckIcon" />,
            path: '/perfil',
        },
        {
            title: 'Meus Agendamentos',
            icon: <Img src='' alt="FiCheckSquareIcon" />,
            path: '/agendamentos',
        },
        {
            title: 'Agendar',
            icon: <Img src='' alt="FiPhone" />,
            path: '/agendar',
        },
    ] as { title: string; icon: ReactNode; path: string }[];


    function handleSignOut(){

        navigate('/');
    }


    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bgGradient={`linear(to-r, ${theme.colors.mag.light}, rgba(235, 210, 200, 1))`}>
                    <Flex flexDir="row" align="center" justify="end" mb="6">
                        <DrawerCloseButton mt="6" mb="6" color="sarsil.orange" />
                    </Flex>
                    <Flex align='center' w='100%' h='100%' flexDir='column' justify='space-between' pb='4'>
                        <VStack
                            spacing={["10", "12"]}
                            align="start"
                            alignItems="left"
                            mt="14"
                            pb="10"
                            bgColor="transparent"
                            w="100%"
                            overflowY='scroll'
                            overflowX='hidden'
                            css={{
                                '::-webkit-scrollbar': {
                                    'width': '10px'
                                },
                                /* Track */
                                '::-webkit-scrollbar-track': {
                                    'background': theme.colors.mag.light,
                                },
                                /* Handle */
                                '::-webkit-scrollbar-thumb': {
                                    'background': theme.colors.mag.brown,
                                    'borderRadius': '10px'
                                },
                                /* Handle on hover */
                                '::-webkit-scrollbar-thumb:hover': {
                                    'background': theme?.colors.mag.brown
                                }
                            }}
                        >
                            <NavLink href='/home' isSidebar>
                                Home
                            </NavLink>
                            {navigation_items.map(item => (
                                <NavLink key={`${item.path}-${Math.floor(Math.random() * 10000)}`} href={item.path} isSidebar>
                                    {item.title}
                                </NavLink>
                            ))}
                        </VStack>
                        <Button
                            variant='unstyled'
                            color='mag.secondary'
                            _hover={{ color: 'mag.primary' }}
                            onClick={handleSignOut}
                        >
                            <HStack spacing='2'>
                                <Icon as={TbLogout} fontSize='1.5rem' />
                                <Text as='span' w='100%' textAlign='left'>
                                    Sair
                                </Text>
                            </HStack>
                        </Button>
                    </Flex>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}