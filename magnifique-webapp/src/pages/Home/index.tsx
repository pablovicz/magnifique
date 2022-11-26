import { Text, VStack } from "@chakra-ui/react";
import { PageContainer } from "../../components/containers/PageContainer";
import { ProductsContainer } from "./ProductsContainer";
import { SchedulingContainer } from "./SchedulingContainer";



export function Home() {

    return (
        <PageContainer pageHeadTitle="agnifique | Home">
            <SchedulingContainer />
            <ProductsContainer />
        </PageContainer>
    );
}