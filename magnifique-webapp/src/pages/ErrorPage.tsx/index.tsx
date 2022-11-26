import { Center, Text, VStack } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import { PublicPageContainer } from "../../components/containers/PublicPageContainer";
import { Link } from 'react-router-dom';
import asset from '../../assets/404.json';


export function ErrorPage() {


    return (
        <PublicPageContainer pageHeadTitle="Magnifique | 404">
            <Center w='100%' h='100%'>
                <VStack spacing='8'>
                    <Center w='100%' h='100%' maxW='20rem'>
                        <Lottie
                            loop
                            animationData={asset}
                            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                            play
                            style={{ width: '90%' }}
                        />
                    </Center>
                    <VStack spacing='2'>
                        <Text w='100%' align='center' fontSize='1rem'>
                            Página não encontrada
                        </Text>
                        <Link to='/'>
                            <Text
                                w='100%'
                                align='center'
                                fontSize='1rem'
                                _hover={{
                                    fontWeight: 'semibold'
                                }}
                            >
                                Voltar
                            </Text>
                        </Link>
                    </VStack>
                </VStack>
            </Center>
        </PublicPageContainer>
    );
}