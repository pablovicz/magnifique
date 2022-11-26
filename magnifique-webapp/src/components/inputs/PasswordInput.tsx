import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import {
    Input as ChakraInput, FormLabel, FormControl,
    InputProps as ChrakraInputProps, FormErrorMessage, InputGroup, FormLabelProps, InputRightElement, Button, Icon
} from '@chakra-ui/react';
import { RenderByCondition } from '../utils/RenderByCondition';
import { InputLabel } from './InputLabel';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


export interface TextInputProps extends ChrakraInputProps {
    name: string;
    label?: string;
    error?: any;
    isValid?: boolean;
    variant?: 'dark' | 'light';
    labelProps?: FormLabelProps;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = ({ name, label, error = null, isValid = null, labelProps, variant = 'light', ...rest }, ref) => {

    const isDarkTheme = variant === 'dark';

    const [isTypePassword, setIsTypePassword] = useState(true);

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
                    type={isTypePassword ? 'password' : 'text'}
                    p='2'
                    size="md"
                    fontSize={['16', '20']}
                    ref={ref}
                    {...rest}
                />
                <InputRightElement>
                    <Button onClick={() => setIsTypePassword(!isTypePassword)} variant='unstyled' size='xs'>
                        <Icon
                            as={isTypePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                            fontSize={['1rem', '1.25rem']}
                            color={isDarkTheme ? 'white' : 'sarsil.purple'}
                            _hover={{ color: 'sarsil.orange' }}
                        />
                    </Button>
                </InputRightElement>
            </InputGroup>
            <RenderByCondition condition={!!error}>
                <FormErrorMessage>{error?.message}</FormErrorMessage>
            </RenderByCondition>
        </FormControl>
    )
}


export const PasswordInput = forwardRef(InputBase);