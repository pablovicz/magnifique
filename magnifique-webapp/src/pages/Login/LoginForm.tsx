import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Center, Divider, Flex, Icon, Text, Tooltip, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TextInput } from '../../components/inputs/TextInput';
import { PasswordInput } from '../../components/inputs/PasswordInput';
import { PrimaryButton } from '../../components/button/PrimaryButton';

import { BsFacebook, BsGoogle, BsApple } from 'react-icons/bs';


export function LoginForm() {

    const navigate = useNavigate();


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        navigate('/home');
    }

    return (
        <VStack
            as='form'
            spacing='8'
            py='2'
            maxW='450px'
            w='100%'
            onSubmit={handleSubmit}
        >
            <Text as='h1' textAlign='center' color='mag.primary'>
                Entrar
            </Text>
            <VStack spacing='0' w='100%'>
                <TextInput
                    name='email'
                    label='Email'
                    isRequired
                    type='email'
                    defaultValue='maria@email.com'
                    isDisabled
                />
                <PasswordInput
                    name='password'
                    label='Senha'
                    isRequired
                    defaultValue='teste123456'
                    isDisabled
                />
                <Box w='100%' pt='2'>
                    <Link to='/forgot-password'>
                        <Text
                            w='100%'
                            textAlign='left'
                            fontSize='1rem'
                            color='mag.primary'
                            _hover={{ cursor: 'pointer', fontWeight: 'semibold' }}
                        >
                            Esqueceu sua senha?
                        </Text>
                    </Link>
                </Box>
            </VStack>
            <Center w='100%'>
                <PrimaryButton
                    type='submit'
                    w='100%'
                    maxW='280px'
                >
                    Entrar
                </PrimaryButton>
            </Center>
            <VStack spacing='4' w='100%'>
                <Flex flexDir='row' align='center' justify='space-between' w='100%'>
                    <Box w='100%' h='1px' bg='mag.primary' ml='12' />
                    <Text as='span' color='mag.primary' w='2rem' mx='4'>
                        ou
                    </Text>
                    <Box w='100%' h='1px' bg='mag.primary' mr='12' />
                </Flex>
                <Wrap w='100%' align='center' justify='center' spacing='8'>
                    <Tooltip
                        label='Continuar com Facebook'
                        rounded='xl'
                        bg='mag.primary'
                        hasArrow
                        placement='bottom'
                        isDisabled
                    >
                        <WrapItem as='button' type='button' disabled>
                            <Icon
                                as={BsFacebook}
                                color='mag.primary'
                                fontSize='2rem'
                                _hover={{
                                    color: '#3B5998',
                                    filter: 'brightness(0.9)'
                                }}
                                cursor='pointer'
                            />
                        </WrapItem>
                    </Tooltip>
                    <Tooltip
                        label='Continuar com Google'
                        rounded='xl'
                        bg='mag.primary'
                        hasArrow
                        placement='bottom'
                        isDisabled
                    >
                        <WrapItem as='button' type='button' disabled>
                            <Icon
                                as={BsGoogle}
                                color='mag.primary'
                                fontSize='1.75rem'
                                _hover={{
                                    color: '#EA4335',
                                    filter: 'brightness(0.9)'
                                }}
                                cursor='pointer'
                            />
                        </WrapItem>
                    </Tooltip>
                    <Tooltip
                        label='Continuar com Apple'
                        rounded='xl'
                        bg='mag.primary'
                        hasArrow
                        placement='bottom'
                        isDisabled
                    >
                        <WrapItem as='button' type='button' disabled>
                            <Icon
                                as={BsApple}
                                color='mag.primary'
                                fontSize='2rem'
                                _hover={{
                                    color: 'black',
                                    filter: 'brightness(0.9)'
                                }}
                                cursor='pointer'
                            />
                        </WrapItem>
                    </Tooltip>
                </Wrap>
                <Text as='span' color='mag.primary' fontWeight='light' fontSize='1rem' cursor='pointer'>
                    <Text as='span' >
                        Ainda não possui conta? <Text as='span' _hover={{ fontWeight: 'semibold' }}>Criar Conta</Text>
                    </Text>
                </Text>
            </VStack>
        </VStack>
    );
}