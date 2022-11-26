import {
    Box,
    FormControl,
    FormErrorMessage,
    Icon,
    Progress,
    Select as ChakraSelectInput,
    SelectProps as ChakraSelectInputProps,
    VStack
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { RenderByCondition } from "../utils/RenderByCondition";
import { MdKeyboardArrowDown } from "react-icons/md";
import { InputLabel, InputLabelProps } from "./InputLabel";

export type optionCustom = {
    value: string | number;
    label: string | number;
}

export interface SelectInputProps extends ChakraSelectInputProps {
    name: string;
    simpleOptions?: number[] | string[]
    complexOptions?: optionCustom[];
    label?: string;
    error?: any;
    isFetching?: boolean;
    labelProps?: InputLabelProps;
    theme?: 'light' | 'dark';
    firstOptionsDisabled?: boolean;
    firstOptionText?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLSelectElement, SelectInputProps> = ({
    name,
    label,
    simpleOptions,
    complexOptions,
    labelProps,
    theme = 'light',
    error = null,
    isFetching = false,
    firstOptionsDisabled = false,
    firstOptionText = 'Selecione uma opção...',
    ...rest
}, ref) => {

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
            <VStack spacing='1' w='100%'>
                <ChakraSelectInput
                    name={name}
                    borderColor={isDarkTheme ? "white" : 'mag.primary'}
                    color={isDarkTheme ? "white" : 'mag.primary'}
                    _focus={{ color: "mag.primary" }}
                    focusBorderColor="mag.primary"
                    _placeholder={{ color: isDarkTheme ? "mag.brown" : "mag.brown", fontWeight: 'thin' }}
                    _disabled={{ bgColor: "transparent", borderColor: 'mag.primary', color: isDarkTheme ? "mag.brown" : "mag.brown", cursor: "not-allowed" }}
                    _invalid={{ bgColor: "transparent", color: 'red' }}
                    textAlign="center"
                    variant={isFetching ? 'unstyled' : "flushed"}
                    px="2"
                    fontSize={['1rem', '1rem']}
                    icon={<Icon as={MdKeyboardArrowDown} fontSize="20" color="white" _focus={{ color: 'sarsil.orange' }} />}
                    justify='center'
                    ref={ref}
                    {...rest}
                >
                    <option disabled={firstOptionsDisabled} value=''>{firstOptionText}</option>
                    {complexOptions && (
                        complexOptions.map(op => (
                            <option key={op.value} value={op.value}>{op.label}</option>
                        ))
                    )}
                    {simpleOptions && (
                        simpleOptions.map(op => (
                            <option key={op} value={op} >{op}</option>
                        ))
                    )}
                </ChakraSelectInput>
                <RenderByCondition condition={isFetching}>
                    <Box w='100%'>
                        <Progress size='xs' isIndeterminate colorScheme='orange' />
                    </Box>
                </RenderByCondition>
                <RenderByCondition condition={!!error}>
                    <FormErrorMessage textAlign='left' w='100%' px='2'>{error?.message}</FormErrorMessage>
                </RenderByCondition>
            </VStack>
        </FormControl>
    );

}


export const SelectInput = forwardRef(InputBase);