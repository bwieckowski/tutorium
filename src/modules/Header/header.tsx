import * as React from "react"
import * as P  from './parts';
import Hamburger from './Hamburger'
import {useState} from "react";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {

    const [isOpen, setOpen] = useState(true);
    const toggleNavbar = () => { isOpen ? setOpen(false) : setOpen(true); console.log(isOpen)};

    return (
        <P.HeaderWrapper className={className}>
            <P.StyledHeader>
                <P.StyledLogo/>
                <P.HorizontalNavigation/>
                <P.StyledHamburger clickCallback={ toggleNavbar }/>
            </P.StyledHeader>
            <P.MobileNavigation isOpen={isOpen} />
        </P.HeaderWrapper>)
};
export default Header;
