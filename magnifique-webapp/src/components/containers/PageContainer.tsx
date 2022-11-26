import { ReactNode } from 'react';
import { Flex } from "@chakra-ui/react";
import { theme } from "../../theme/theme";
import { Footer } from "../Footer";
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';



interface PageContainerProps {
    children: ReactNode;
    pageHeadTitle?: string;
}

export function PageContainer({ children, pageHeadTitle = 'Magnifique' }: PageContainerProps) {

    document.title = pageHeadTitle;

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
            <Header />
            <Sidebar />
            <Flex
                as='main'
                flex='1'
                flexDir="column"
                align='center'
                justify='space-between'
                px='4'
                mt='24'
                zIndex={4}
            >
                {children}
            </Flex>
            <Footer variant='outline' />
        </Flex>
    );
}