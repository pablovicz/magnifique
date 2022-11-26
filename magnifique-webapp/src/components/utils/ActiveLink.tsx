import { useLocation } from 'react-router-dom';
import { cloneElement, ReactElement } from 'react';
import { NavLink, NavLinkProps } from "react-router-dom";


interface ActiveLinkProps extends NavLinkProps {
    children: ReactElement;
    isSidebar?: boolean;
    isDarkTheme?: boolean;
}


export function ActiveLink({ children, isDarkTheme = true, isSidebar = false, ...rest }: ActiveLinkProps) {

    const { pathname } = useLocation();

    const colorScheme = {
        activeColor: 'mag.primary',
        color:  'mag.secondary',
        hoverColor: 'mag.primary'
    }

    function handleIsActive() {
        if (rest.to === '/' && pathname.toString().length > 1) {
            return false;
        }
        if (pathname === String(rest.to)) {
            return true;
        }
        if (pathname.substring(1).includes(String(rest.to))) {
            return true;
        }

        return false;
    }

    const isActive = handleIsActive();

    const styles = {
        color: isActive ? colorScheme.activeColor : colorScheme.color,
        cursor: isActive ? 'none' : 'pointer',
        _hover: isActive ? undefined : { color: colorScheme.hoverColor },
        fontSize: ["md", "lg"],
        fontWeight: "bold",
        py: "2"
    }

    const sidebarStyles = {
        color: isActive ? colorScheme.activeColor : colorScheme.color,
        cursor: isActive ? 'none' : 'pointer',
        fontSize: ["md", "lg"],
        fontWeight: "bold",
        py: "2",
        pl: '12',
        pr: '4',
        borderLeftWidth: isActive ? '4px' : undefined,
        borderLeftStyle: isActive ? 'solid' : undefined,
        borderLeftColor: isActive ? colorScheme.activeColor : undefined,
        _hover: isActive ? undefined : { color: colorScheme.hoverColor, borderLeftWidth: '4px', borderLeftStyle: 'solid', borderLeftColor: colorScheme.hoverColor },
    }



    return (
        <NavLink {...rest}>
            {cloneElement(children, isSidebar ? sidebarStyles : styles)}
        </NavLink>
    );
}