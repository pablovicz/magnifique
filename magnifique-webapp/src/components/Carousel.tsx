import { Box, Center, Flex, HStack, VStack, StackProps, Icon } from "@chakra-ui/react";
import { ReactNode, useMemo, useState } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { useSwipeable } from "react-swipeable";
import { CustomIconButton } from "./button/CustomIconButton";
import { RenderByCondition } from "./utils/RenderByCondition";


interface CarouselProps extends StackProps {
    children: ReactNode[];
    showedItems?: number;
    withCount?: {
        placement: 'top' | 'bottom'
    };
    withArrows?: boolean;
}


export function Carousel({ children, showedItems = 1, withCount = undefined, withArrows = false, ...rest }: CarouselProps) {

    const [index, setIndex] = useState(0);

    function handleNextClick() {

        if (index === children.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }

    }

    function handleBackClick() {

        if (index === 0) {
            setIndex(children.length - 1);
        } else {
            setIndex(index - 1);
        }
    }


    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleBackClick,
        onSwipedRight: handleNextClick
    });

    const showedSlides = useMemo(() => {
        if (showedItems < children.length) {

            return children.slice(index, index + showedItems);
        } else {

            return children
        }
    }, [index, showedItems, children]);


    return (
        <VStack spacing='4' w='100%' {...rest}>
            <RenderByCondition condition={!!withCount && withCount.placement === 'top' && children.length > showedItems}>
                <HStack spacing='4'>
                    {children.map(slide => (
                        <Box key={Math.random()} borderRadius='50%' w={2.5} h={2.5} bgColor={children.indexOf(slide) === index ? 'mag.primary' : 'mag.secondary'} />
                    ))}
                </HStack>
            </RenderByCondition>
            <Center w='100%'>
                <Flex flexDir='row' align='center' justify='center'>
                    <RenderByCondition condition={withArrows && showedItems < children.length}>
                        <CustomIconButton
                            aria-label="Anterior"
                            size='md'
                            color='mag.secondary'
                            onClick={() => handleBackClick()}
                            icon={<Icon as={MdOutlineArrowBackIos} fontSize='1.5rem' />}
                            p='0'
                        />
                    </RenderByCondition>
                    <HStack spacing='2' {...swipeHandlers}>
                        {showedSlides}
                    </HStack>
                    <RenderByCondition condition={withArrows && showedItems < children.length}>
                        <CustomIconButton
                            aria-label="Próximo"
                            size='md'
                            color='mag.secondary'
                            onClick={() => handleBackClick()}
                            icon={<Icon as={MdArrowForwardIos} fontSize='1.5rem' />}
                            p='0'
                        />
                    </RenderByCondition>
                </Flex>
            </Center>
            <RenderByCondition condition={!!withCount && withCount.placement === 'bottom' && children.length > showedItems}>
                <HStack spacing='4'>
                    {children.map(slide => (
                        <Box key={Math.random()} borderRadius='50%' w={2.5} h={2.5} bgColor={children.indexOf(slide) === index ? 'mag.primary' : 'mag.secondary'} />
                    ))}
                </HStack>
            </RenderByCondition>
        </VStack>


    );

}