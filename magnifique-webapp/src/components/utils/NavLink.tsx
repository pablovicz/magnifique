import { Link as ChakraLink, Text, LinkProps as ChakraLinkProps, Flex, TextProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../utils/ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    icon?: ElementType;
    children: string;
    href: string;
    textProps?: TextProps;
    isSidebar?: boolean;
}


export function NavLink({ icon, children, href, textProps = { fontWeight: 'normal', textAlign: 'left', fontSize: ["md", "lg"] },  isSidebar = false, ...rest }: NavLinkProps) {


    return (
        <ActiveLink to={href} style={{ textDecoration: 'none' }} isSidebar={isSidebar}>
            <ChakraLink
                as="span"
                display="flex"
                align="center"
                justifyContent="center"
                textDecoration='none'
                {...rest}
            >
                <Flex
                    direction="row"
                    justify={isSidebar ? 'flex-start' : "center"}
                    align="center"
                    w="100%"
                >
                    <Text {...textProps}>
                        {children}
                    </Text>
                </Flex>
            </ChakraLink>
        </ActiveLink>
    );
}