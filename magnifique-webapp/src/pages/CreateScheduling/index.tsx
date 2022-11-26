import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {format} from 'date-fns';
import { Center, Text, useToast, VStack } from "@chakra-ui/react";
import { PageContainer } from "../../components/containers/PageContainer";
import { SelectInput } from "../../components/inputs/SelectInput";
import { TextInput } from "../../components/inputs/TextInput";
import { PrimaryButton } from '../../components/button/PrimaryButton';
import { delay } from '../../utils/utils';



export function CreateScheduling() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const treatments = [
        { label: 'Lipo Enzimática', value: 130 },
        { label: 'Glúteo Max', value: 200 },
        { label: 'Striort', value: 375 },
        { label: 'Carbixuterapia', value: 225 },
        { label: 'Corrente Russa', value: 150 },
        { label: 'Kavix Avatar', value: 190 },
        { label: 'Depilação a laser', value: 159.99 },
        { label: 'Ozônio Estrias', value: 249.50 },
        { label: 'Jato de Plasma', value: 315 },
        { label: 'Lipo Drenagem', value: 179.99 },
        { label: 'Peeling', value: 250 },
        { label: 'Dermaroller', value: 299.99 },
        { label: 'Luz Intensa Pulsado', value: 99.99 }
    ]

    const [treatment, setTreatment] = useState(treatments[0].value);

    const toast = useToast();
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        setIsSubmitting(true);
        await delay(5);
        toast({
            status: 'success',
            title: 'Tratamento Marcado!',
            description: 'Seu tratamento foi marcado com sucesso.',
            duration: 10000,
            isClosable: true,
            position: 'bottom'
        });
        navigate('/home');
    }



    return (
        <PageContainer pageHeadTitle="agnifique | Agendar">
            <Center w='full' px='4' mt='12' >
                <VStack w='100%' spacing='8' as='form' onSubmit={handleSubmit}>
                    <Text
                        as='h1'
                        fontSize='1.5rem'
                        color='mag.primary'
                        fontWeight='semibold'
                        w='100%'
                        textAlign='center'
                    >
                        AGENDAR TRATAMENTO
                    </Text>
                    <VStack spacing='4' w='100%'>
                        <TextInput
                            name='date'
                            type='datetime-local'
                            label='Data do Agendamento'
                            textAlign='center'
                            labelProps={{
                                textAlign: 'center',
                                fontWeight: 'semibold'
                            }}
                            min={format(new Date(), 'yyyy-MM-dd hh:mm')}
                            isRequired
                            isDisabled={isSubmitting}
                        />
                        <SelectInput
                            name='service'
                            label='Tipo de tratamento'
                            complexOptions={treatments}
                            value={treatment}
                            onChange={event => setTreatment(Number(event.target.value))}
                            isRequired
                            labelProps={{
                                textAlign: 'center',
                                fontWeight: 'semibold'
                            }}
                            isDisabled={isSubmitting}
                        />
                        <SelectInput
                            name='service'
                            label='Profissional'
                            simpleOptions={[
                                'Cláudia Santos',
                                'Maria Silva',
                                'Ana Soares',
                                'Rosane',
                                'Rosinha',
                                'Luís Paulo',
                                'João Pedro',
                                'Carlos',
                                'Elaine'
                            ]}
                            isRequired
                            labelProps={{
                                textAlign: 'center',
                                fontWeight: 'semibold'
                            }}
                            isDisabled={isSubmitting}
                        />
                        <VStack spacing='1' pt='4'>
                            <Text color='mag.primary' fontSize='2xl' textAlign='left'>
                                Valor:
                                <Text as='span' fontWeight='semibold' ml='4'>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(treatment)
                                    }
                                </Text>
                            </Text>

                        </VStack>


                    </VStack>
                    <PrimaryButton w='100%' type='submit' isLoading={isSubmitting}>
                        AGENDAR
                    </PrimaryButton>
                </VStack>
            </Center>

        </PageContainer>
    );
}