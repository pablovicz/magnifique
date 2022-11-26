import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RenderByCondition } from "../utils/RenderByCondition";


interface CustomIconButtonProps extends ButtonProps {
    icon: ReactNode;
    renderIf?: boolean;
}


export function CustomIconButton({ icon, renderIf = true, ...rest }: CustomIconButtonProps) {

    return (
        <RenderByCondition condition={renderIf}>
            <Button
                borderRadius="10px"
                _focus={{ bgColor: 'transparent', color: 'sarsil.primary', border: 'none' }}
                _hover={{ bgColor: 'transparent', color: 'sarsil.primary', border: 'none', filter: 'brigthness(0.95)' }}
                bgColor="transparent"
                color="white"
                {...rest}
            >
                {icon}
            </Button>
        </RenderByCondition>
    );
}