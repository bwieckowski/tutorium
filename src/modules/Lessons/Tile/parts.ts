import styled from "styled-components";
import Image from "components/image";
import * as media from 'utils/grid/media'
import {colors} from "../../../utils/config";

export const StyledWrapper = styled.div`
  background-color: ${colors.primatyLight};
  position: relative;
  padding-top: 65px;

`;
export const StyledImage = styled(Image)`
    width: 200px;
    height: 150px;
    border-radius: 20px;
    position: absolute;
    z-index: 99;
    left: 51px;
    bottom:64px;
`;
export const Description = styled.div`
  display: flex;
  font-size: 12px;
  color: ${ colors.black };
  text-align: center;
  background-color: ${colors.white};
  width: 200px;
  height: 150px;
  border-radius: 20px;
  justify-content: center;
  align-items: flex-end;
  padding: 0 42px 17px 43px;
`;
