import { Avatar, Center, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaUserAlt } from 'react-icons/fa';
import { Options } from "./Options";



export function Header() {

    return (
        <Center
            as="header"
            width="100vw"
            bgColor='mag.primaryDark'
            color='white'
            position='fixed'
            zIndex={20}
            boxShadow='sm'
        >
            <Flex
                margin="auto"
                py='4'
                px='8'
                justify="space-between"
                align="center"
                maxW={1246}
                flexDir='row'
                w='100%'
            >
                <HStack spacing='4' w='100%'>
                    <Center w='3.5rem' h='3rem' p='1' bg='mag.light' borderRadius='50%'>
                        <Icon as={FaUserAlt} fontSize='1.5rem' color='mag.primary' />
                    </Center>
                    <Text as='span' fontSize='1rem' color='white' w='100%' textAlign='left'>
                        Olá, Maria!
                    </Text>
                </HStack>
                <Options />
            </Flex>
        </Center>
    );
}