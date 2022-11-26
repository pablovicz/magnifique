import { ReactNode } from 'react';
import { Button, ButtonProps } from "@chakra-ui/react";

interface PrimaryButtonProps extends ButtonProps {
    children?: ReactNode;
}

export function PrimaryButton({ children, ...rest }: PrimaryButtonProps) {


    return (
        <Button
            bg='mag.primary'
            color='mag.light'
            _hover={{
                bg: 'mag.primary',
                filter: 'brightness(0.9)'
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}