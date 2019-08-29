import styled from 'styled-components';
import {colors} from "../../utils/config";

export const StyledWrapper = styled.div`
  height: 200px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.h1`
  font-weight: bold;
  color: ${colors.primary};
  font-size: 48px;
  margin-bottom: 0;
`

export const Section = styled.p`
  font-size: 14px;
  margin-top: 0;
  text-align: center;
`



