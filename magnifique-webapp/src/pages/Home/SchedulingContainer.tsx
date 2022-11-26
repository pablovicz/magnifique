import { Box, Center, Flex, HStack, Icon, Text, Tooltip, useBreakpointValue, VStack } from "@chakra-ui/react";
import { subDays, addDays, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { CustomIconButton } from "../../components/button/CustomIconButton";
import { RenderByCondition } from "../../components/utils/RenderByCondition";
import { getDaysArray } from "../../utils/utils";



export function SchedulingContainer() {

    const isMobileVersion = useBreakpointValue({
        base: false,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });

    const rangeSize = isMobileVersion ? 1 : 2;

    const now = new Date();
    const start = subDays(now, rangeSize);
    const end = addDays(now, rangeSize);

    const appointment = addDays(now, 1);


    const navigate = useNavigate();


    return (
        <Center
            w='full'
            mt='8'
            px='4'
        >
            <VStack
                spacing='8'
            >
                <Flex flexDir='row' w='100%' align='center' justify='space-between'>
                    <Box w='1rem' />
                    <Text
                        as='h2'
                        fontSize='1.5rem'
                        color='mag.primary'
                        fontWeight='semibold'
                        w='100%'
                        textAlign='center'
                    >
                        Seus Agendamentos
                    </Text>

                    <CustomIconButton
                        aria-label="Criar"
                        size='md'
                        color='mag.secondary'
                        _hover={{
                            color: 'mag.primary'
                        }}
                        onClick={() => navigate('/agendar')}
                        icon={<Icon as={AiFillPlusCircle} fontSize='1.5rem' />}
                        p='0'
                    />
                </Flex>
                <HStack
                    spacing='4'
                >
                    {getDaysArray(start, end).map(day => (
                        <Center
                            key={day.getTime()}
                            pt='1'
                            _hover={{
                                pt: '0',
                                pb: '1',
                            }}
                        >
                            <Tooltip
                                label='Sua consulta será as 15:35.'
                                isDisabled={format(day, 'yyyy-MM-dd') !== format(appointment, 'yyyy-MM-dd')}
                                bg='green.500'
                                color='white'
                                rounded='xl'
                                hasArrow
                                placement='bottom'
                            >
                                <Center
                                    w='5rem'
                                    h='6rem'
                                    p='1'
                                    cursor='pointer'
                                    bg={format(now, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd') ? 'mag.primary' : format(day, 'yyyy-MM-dd') === format(appointment, 'yyyy-MM-dd') ? 'green.500' : 'mag.brown'}
                                    rounded='2xl'
                                    color='white'
                                    boxShadow='md'
                                    _hover={{
                                        boxShadow: 'lg'
                                    }}
                                >
                                    <VStack spacing='1'>
                                        <Text
                                            as='span'
                                            w='100%'
                                            textAlign='center'
                                            fontSize='0.875rem'
                                        >
                                            {format(day, 'EEEE')}
                                        </Text>
                                        <Text
                                            as='span'
                                            w='100%'
                                            textAlign='center'
                                            fontSize='1.5rem'
                                            fontWeight='semibold'
                                        >
                                            {format(day, 'dd')}
                                        </Text>
                                        <RenderByCondition condition={format(now, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')}>
                                            <Text
                                                as='span'
                                                w='100%'
                                                textAlign='center'
                                                fontSize='0.875rem'
                                            >
                                                HOJE
                                            </Text>
                                        </RenderByCondition>
                                        <RenderByCondition condition={format(day, 'yyyy-MM-dd') === format(appointment, 'yyyy-MM-dd')}>
                                            <Text
                                                as='span'
                                                w='100%'
                                                textAlign='center'
                                                fontSize='0.875rem'
                                            >
                                                Toxi...
                                            </Text>
                                        </RenderByCondition>
                                    </VStack>
                                </Center>
                            </Tooltip>
                        </Center>
                    ))}
                </HStack>
            </VStack>
        </Center>
    );
}