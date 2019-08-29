import styled from 'styled-components'
import {colors} from 'utils/config'

export const StyledWrapper = styled.div`
    width: 50px;
    height:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const StyledBar = styled.div`
    width: 38px;
    height:4px;
    margin-bottom: 5px;
    background-color: ${colors.greyDarker};
`;

