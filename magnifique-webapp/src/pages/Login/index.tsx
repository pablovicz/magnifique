import { Center, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import { PublicPageContainer } from "../../components/containers/PublicPageContainer";
import { Logo } from "../../components/Logo";
import { LoginForm } from "./LoginForm";
import LoginAsset from '../../assets/girl-with-flowers.json';

export function Login() {

    const isMobileVersion = useBreakpointValue({
        base: false,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });

    if (isMobileVersion) {


        return (
            <PublicPageContainer pageHeadTitle="Magnifique | Login">
                <Center
                    boxShadow='2xl'
                    borderRadius='15px'
                    backdropFilter='auto'
                    backdropBlur='20px'
                    background='white'
                    px='4'
                    py='4'
                >
                    <VStack spacing='8' py='4'>
                        <Logo />
                        <LoginForm />
                    </VStack>
                </Center>
            </PublicPageContainer>
        );
    }


    return (
        <PublicPageContainer pageHeadTitle="Magnifique | Login">
            <Flex
                flexDir='row'
                align='center'
                justify='center'
                boxShadow='2xl'
                w='100%'
                maxW='1080px'
                borderRadius='15px'
                backdropFilter='auto'
                backdropBlur='10px'
                background='rgba(255, 255, 255, 0.35)'
            >
                <Flex
                    flexDir='column'
                    align='center'
                    justify='space-between'
                    py='4'
                    px='8'
                    w='50%'
                    h='100%'
                    borderRadius='15px 0px 0px 15px'
                    marginBottom='auto'
                >
                    <Flex
                        flexDir='row'
                        align='center'
                        justify='flex-start'
                        w='100%'
                        py='2'
                        marginBottom='auto'
                    >
                        <Logo />
                    </Flex>
                    <Center w='100%' h='100%'>
                        <Lottie
                            loop
                            animationData={LoginAsset}
                            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                            play
                            style={{ width: '90%' }}
                        />
                    </Center>
                </Flex>
                <Flex
                    flexDir='column'
                    align='center'
                    justify='space-between'
                    w='50%'
                    bg='gray.50'
                    borderRadius='0px 15px 15px 0px'
                    py='12'
                    px='4'
                >
                    <LoginForm />
                </Flex>
            </Flex>
        </PublicPageContainer>
    );
}