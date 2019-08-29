import React from "react";
import Image from "components/image";
import * as P from './parts'

interface TileProps{
    src: string;
    decription: string;
    className?: string;
}
const Tile: React.FC<TileProps>  = ( {src, decription, className}) => (
    <P.StyledWrapper className={className}>
        <P.StyledImage src={src} alt={"zajecia"} />
        <P.Description>{decription}</P.Description>
    </P.StyledWrapper>
);

export default Tile;
