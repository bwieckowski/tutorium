import React from "react";
import * as P from "./parts"

interface HamburgerProps{
    clickCallback: () => void;
    className?: string;
}
const Hamburger: React.FC<HamburgerProps> = ({clickCallback, className}) => {
    return(
    <P.StyledWrapper className={className} onClick={clickCallback}>
        <P.StyledBar />
        <P.StyledBar />
        <P.StyledBar />
    </P.StyledWrapper>
)};
export default Hamburger
