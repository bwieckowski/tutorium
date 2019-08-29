import React from "react"
import styled from "styled-components"
import {BrakepointsName, breakposints} from './media'
interface ColProps {
    sizes: number[];
}

const renderColumnsStyles = ( sizes: number[] ) => {
    return Object.keys(breakposints).map((key: BrakepointsName, id: number)=>(
        `@media(min-width: ${breakposints[key]}px){ width: ${(sizes[id]*100)}%}`
    ));
}

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${( props: ColProps) => ( renderColumnsStyles(props.sizes) )}
  padding: 20px;
`

// const Col: React.FC<ColProps> = ( {children, sizes} ) => (
//     <ColWrapper sizes={sizes}>
//         {children}
//     </ColWrapper>
// )

export default ColWrapper;


