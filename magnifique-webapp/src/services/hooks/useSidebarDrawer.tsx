import { useContext } from "react";
import { SidebarDrawerContext } from "../providers/SidebarDrawerProvider";

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);