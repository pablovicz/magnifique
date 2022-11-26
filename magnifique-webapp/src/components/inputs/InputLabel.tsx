import { FormLabel, FormLabelProps, Icon, Text, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { RenderByCondition } from "../utils/RenderByCondition";


export interface InputLabelProps extends FormLabelProps {
    children?: ReactNode;
    renderIf?: boolean;
    tooltip?: string;
    isDarkTheme?: boolean;
    isRequired?: boolean;
}


export function InputLabel({ children, tooltip, renderIf = true, isDarkTheme = false, isRequired = false, ...rest }: InputLabelProps) {

    return (
        <RenderByCondition condition={renderIf}>
            <FormLabel
                fontWeight="regular"
                _focus={{ color: "sarsil.orange" }}
                _invalid={{ color: 'red' }}
                textAlign="left"
                w='100%'
                color={isDarkTheme ? "white" : 'sarsil.purple'}
                fontSize={{ base: '1.25rem', sm: '1rem' }}
                // ml={!!tooltip ? '8' : undefined}
                {...rest}
            >
                {children}{isRequired && (<Text as='span' color='sarsil.orange'> *</Text>)}
                <RenderByCondition condition={!!tooltip}>
                    <Tooltip
                        placement='bottom'
                        bgColor='sarsil.orange'
                        color='white'
                        rounded='2xl'
                        hasArrow
                        label={tooltip}
                    >
                        <Text as='span' ml='2' verticalAlign='baseline' cursor='pointer'>
                            <Icon as={BiHelpCircle} color='sarsil.primary' fontSize='1.25rem' />
                        </Text>
                    </Tooltip>
                </RenderByCondition>
            </FormLabel>
        </RenderByCondition>
    );
}