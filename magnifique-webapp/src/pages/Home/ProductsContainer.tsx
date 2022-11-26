import { ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { Carousel } from "../../components/Carousel";


export function ProductsContainer() {

    const products = [
        {
            title: 'Toxina Botulína',
            description: 'Lorem ipsum litora semper eros pretium mattis amet felis ante in iaculis viverra eget elementum',
            image: 'https://neoderme.com.br/wp-content/uploads/2021/07/iStock-656650192-1024x683.jpg',
            price: 125
        },
        {
            title: 'Peeling Químico',
            description: 'Lorem ipsum litora semper eros pretium mattis amet felis ante in iaculis viverra eget elementum',
            image: 'https://simoneneri.com.br/wp-content/uploads/2020/12/Captura-de-Tela-2020-12-21-a%CC%80s-12.44.57.png',
            price: 250
        },
        {
            title: 'Microagulhamento',
            description: 'Lorem ipsum litora semper eros pretium mattis amet felis ante in iaculis viverra eget elementum',
            image: 'https://static.tuasaude.com/media/article/vi/hi/dermaroller_57283.webp',
            price: 175
        }
    ]

    const isWideVersion = useBreakpointValue({
        base: true,
        sm: false,
        md: false,
        lg: true,
        xl: true
    })

    const isMidVersion = useBreakpointValue({
        base: true,
        sm: false,
        md: true,
        lg: false,
        xl: false
    })

    const navigate = useNavigate();

    return (
        <Center w='full' px='4' mt='12'>
            <VStack w='100%' spacing='8'>
                <Text
                    as='h2'
                    fontSize='1.5rem'
                    color='mag.primary'
                    fontWeight='semibold'
                    w='100%'
                    textAlign='center'
                >
                    Confira essas ofertas
                </Text>
                <Carousel
                    showedItems={isWideVersion ? 3 : isMidVersion ? 2 : 1}
                    withArrows
                    withCount={{ placement: 'bottom' }}
                >
                    {products?.map(product => (
                        <Center
                            key={product.title}
                            pt='2'
                            _hover={{
                                pt: '0',
                                pb: '2',
                            }}
                        >
                            <Card w='15rem' key={product.title} bg='white' boxShadow='lg' cursor='pointer'>
                                <CardBody bg='white' rounded='xl'>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3' w='100%'>
                                        <Heading size='md' color='mag.primary'> {product.title}</Heading>
                                        <Text color='mag.primaryDark' w='100%'>
                                            {product.description}
                                        </Text>
                                        <Text color='mag.primary' fontSize='2xl' textAlign='center' fontWeight='semibold'>
                                            {new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL',
                                            }).format(product.price)
                                            }
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter bg='white' rounded='2xl'>
                                    <Center w='100%'>
                                        <PrimaryButton onClick={() => navigate('/agendar')}>
                                            AGENDAR
                                        </PrimaryButton>
                                    </Center>
                                </CardFooter>
                            </Card>
                        </Center>
                    ))}
                </Carousel>
            </VStack>
        </Center>
    );
}