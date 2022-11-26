import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { createContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}


interface SidebarDrawerContextData extends UseDisclosureReturn {}

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);


export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

    const disclosure = useDisclosure();

    const location = useLocation();
    
    useEffect(() => {
        disclosure.onClose();
    }, [location.pathname]);

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}