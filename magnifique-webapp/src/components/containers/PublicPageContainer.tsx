import { ReactNode } from 'react';
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import { Footer } from '../Footer';

import './animate.css';


interface PublicPageContainerProps {
    children: ReactNode | ReactNode[];
    pageHeadTitle?: string;
}



export function PublicPageContainer({ children, pageHeadTitle = 'Magnifique' }: PublicPageContainerProps) {

    document.title = pageHeadTitle;

    const isMobileVersion = useBreakpointValue({
        base: false,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });

    return (

        <Flex
            flexDir="column"
            align="center"
            justify="space-between"
            w='100vw'
            h='100vh'
            minW={300}
            overflowX="hidden"
        >
            <Flex
                flexDir='column'
                align='center'
                justify='space-between'
                w='100%'
                p='4'
                className='animatedBackground'
            >
                <Box py={isMobileVersion ? undefined : '2'} mt={isMobileVersion ? undefined : '8'}>
                    <Box h='0.875rem' />
                </Box>
                {children}
                <Footer variant='unstyled' py='2' mt='8' />
            </Flex>
        </Flex>
    );
}