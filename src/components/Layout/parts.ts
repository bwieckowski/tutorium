import styled, { createGlobalStyle }  from 'styled-components'
import {colors} from "../../utils/config";

export const GlobalStyle = createGlobalStyle`
  *,body {
    margin: 0;
    font-family: "GE Inspira";
    box-sizing: border-box;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  height:50px;
  background-color: ${colors.primatyLight};
  text-align: center;
`;
