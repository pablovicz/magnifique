import { Center, CenterProps, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { maxWidth } from "../theme/theme";


interface FooterProps extends CenterProps {
    variant?: 'outline' | 'unstyled';
}

export function Footer({ variant = 'outline', ...rest }: FooterProps) {

    const isMobileVersion = useBreakpointValue({
        base: false,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });

    return (
        <Center
            as='footer'
            w='100%'
            py={variant !== 'unstyled' ? '4' : undefined}
            px={variant !== 'unstyled' ? { base: '8', sm: '4', md: '8', lg: '8', xl: '8' } : undefined}
            mt={variant !== 'unstyled' ? '16' : undefined}
            borderTopStyle={variant === 'outline' ? 'solid' : undefined}
            borderTopWidth={variant === 'outline' ? '1px' : undefined}
            borderTopColor={variant === 'outline' ? 'gray.50' : undefined}
            bg='transparent'
            {...rest}
        >
            <Flex
                flexDir={isMobileVersion ? 'column' : 'row'}
                align='center'
                justify='space-between'
                w='100%'
                maxW={variant !== 'unstyled' ? maxWidth : undefined}
            >
                <Flex
                    flexDir='row'
                    align='center'
                    justify={isMobileVersion ? 'center' : 'flex-start'}
                    w={isMobileVersion ? '100%' : '50%'}
                    pr={isMobileVersion ? undefined : '4'}
                    pb={isMobileVersion ? '4' : undefined}
                >
                    <Link
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                        fontSize='0.875rem'
                        cursor='pointer'
                        textAlign='center'
                        color='mag.primary'
                        px='4'
                        _hover={{
                            fontWeight: 'semibold'
                        }}
                    >
                        Política de Privacidade
                    </Link>

                    <Link
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                        fontSize='0.875rem'
                        cursor='pointer'
                        textAlign='center'
                        color='mag.primary'
                        px='4'
                        _hover={{
                            fontWeight: 'semibold'
                        }}
                    >
                        Sobre
                    </Link>
                </Flex>
                <Center>
                    <Text
                        fontSize='0.875rem'
                        fontWeight='thin'
                        w='100%'
                        textAlign='center'
                        color='mag.primary'
                    >
                        Copyright © {new Date().getFullYear()} • Magnifique
                    </Text>
                </Center>
            </Flex>

        </Center>
    );

}