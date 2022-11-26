import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Lottie from "react-lottie-player";
import { PublicPageContainer } from "../../components/containers/PublicPageContainer";
import asset from '../../assets/404.json';


export function ErrorPage() {

    const navigate = useNavigate();

    function handleBack(){
        navigate('/');
    }

    return (
        <PublicPageContainer pageHeadTitle="agnifique | 404">
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
                        <Button
                            variant='unstyled'
                            as='a'
                            onClick={handleBack}
                        >
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
                        </Button>
                    </VStack>
                </VStack>
            </Center>
        </PublicPageContainer>
    );
}