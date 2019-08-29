import styled from "styled-components";
import AboutMePhoto from 'images/AboutMe.jpg'
import {colors} from "../../utils/config";
import * as media from 'utils/grid/media'

export const StyledWrapper = styled.div`

`
export const PhotoWrapper = styled.div`
  background: url(${AboutMePhoto});
  background-size: auto 100%;
  background-position-x: 98%;
  background-position-y: -140%;
  width: 100%;
  height: 1020px;
  position: relative;
  
  &:after{
       content: '';
    width: 100%;
    height: 1020px;
    background-color: ${colors.darkerShadow};
    position: absolute;
  }
  
   ${media.from('tablet')}{
       &:after{
         background-color: transparent;
        }
    }
    
  ${media.from('ipad')}{
   
    background-position-x: 0;
    background-size: 102% auto;
     background-position-y: 0;
    height: 742px;
  }
    
  
`;
export const Description = styled.div`
  position: absolute;
  z-index: 99;
  color: ${ colors.white };
  padding-left:30px;
  padding-right: 30px;
  text-align: justify;
  
  ${media.from('tablet')}{
     width: 400px;
  } 
`;

export const Section = styled.p`
  margin-top: 20px;
`;
export const Heading = styled.h2`
    font-size: 48px;
    margin-top: 0px;
    padding-top: 220px;
    
  ${media.from('tablet')}{
      padding-top: 104px;
  }
`;

export const StyledButton = styled.button`
    width: 150px;
    height: 40px;
    background: ${colors.primary};
    border: 3px solid ${colors.primary};
    box-sizing: border-box;
    border-radius: 20px;
    color: ${colors.white};
    margin-top: 40px;
    
    ${media.from('tablet')}{
      background-color: transparent;
      color: ${colors.primary};
    }
`
