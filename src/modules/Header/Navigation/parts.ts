import styled from 'styled-components'
import {colors} from 'utils/config'
import { Link } from "react-scroll";

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledItem = styled(Link)`
    font-family: "GE Inspira";
    font-size: 24px;
    margin-top: 50px;
    color: ${colors.black};
`;

