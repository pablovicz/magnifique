
import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
    Input as ChakraInput, FormControl,
    InputProps as ChrakraInputProps, FormErrorMessage, InputGroup, FormLabelProps, Box
} from '@chakra-ui/react';
import { RenderByCondition } from '../utils/RenderByCondition';
import { InputLabel } from './InputLabel';


export interface TextInputProps extends ChrakraInputProps {
    name: string;
    label?: string;
    error?: any;
    isValid?: boolean;
    theme?: 'dark' | 'light';
    labelProps?: FormLabelProps;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = ({ name, label, error = null, isValid = null, labelProps, theme = 'light', ...rest }, ref) => {


    const isDarkTheme = theme === 'dark';

    return (
        <FormControl isInvalid={!!error}>
            <InputLabel
                htmlFor={name}
                renderIf={!!label}
                isDarkTheme={isDarkTheme}
                isRequired={rest.isRequired}
                {...labelProps}
            >
                {label}
            </InputLabel>
            <InputGroup>
                < ChakraInput
                    name={name}
                    variant="flushed"
                    bgColor="none"
                    borderColor={isDarkTheme ? "white" : 'sarsil.purple'}
                    color={isDarkTheme ? "white" : 'sarsil.purple'}
                    _focus={{ color: "sarsil.orange" }}
                    focusBorderColor="sarsil.orange"
                    _placeholder={{ color: isDarkTheme ? "gray.200" : "gray.300", fontWeight: 'thin' }}
                    _disabled={{ bgColor: "transparent", borderColor: isDarkTheme ? "gray.200" : "gray.300", color: isDarkTheme ? "gray.200" : "gray.300", cursor: "not-allowed" }}
                    _invalid={{ bgColor: "transparent", color: 'red' }}
                    p='2'
                    size="md"
                    fontSize={['16', '20']}
                    ref={ref}
                    {...rest}
                />
            </InputGroup>
            <Box w='100%' minH='30px'>
                <RenderByCondition condition={!!error}>
                    <FormErrorMessage>{error?.message}</FormErrorMessage>
                </RenderByCondition>
            </Box>
        </FormControl>
    )
}


export const TextInput = forwardRef(InputBase);