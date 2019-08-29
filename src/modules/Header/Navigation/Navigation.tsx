import React from "react";
import * as P from "./parts"

interface NavigationProps{
    className?: string;
}

const Navigation: React.FC<NavigationProps> = ({className}) => (
    <P.StyledWrapper className={className} >
        <P.StyledItem to={"home"} smooth={true}>Home</P.StyledItem>
        <P.StyledItem to={"aboutMe"} smooth={true}>O mnie</P.StyledItem>
        <P.StyledItem to={"lessons"} smooth={true}>Zajęcia</P.StyledItem>
        <P.StyledItem to={"opinions"} smooth={true} offset={500}>Opinie</P.StyledItem>
        <P.StyledItem to={"contact"} smooth={true} >Kontakt</P.StyledItem>
    </P.StyledWrapper>
);
export default Navigation
