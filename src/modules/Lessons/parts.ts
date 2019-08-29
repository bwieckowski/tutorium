import styled from "styled-components";
import AboutMePhoto from 'images/AboutMe.jpg'
import {colors} from "../../utils/config";
import * as media from 'utils/grid/media'
import Tile from "./Tile";

export const StyledWrapper = styled.div`
  background-color: ${colors.primatyLight};

`;

export const Description = styled.div`
  z-index: 99;
  color: ${ colors.white };
  padding-left:30px;
  padding-right: 30px;
  text-align: justify;
  
  ${media.from('tablet')}{
     width: 400px;
  } 
  
   ${media.from('ipad')}{
     width: 680px;
  } 
`;

export const Section = styled.p`
  margin: 0;
  margin-top: 19px;
`;
export const Heading = styled.h2`
    font-size: 48px;
    margin-top: 0px;
    padding-top: 28px;
    
  ${media.from('tablet')}{
      padding-top: 104px;
  }
`;

export const StyledTile = styled(Tile)`
  margin: 60px 30px 0 0;
      ${media.from('tablet')}{
          transform: scale(0.6);
          margin: 0 -10px;
      }
      
     ${media.from('ipad')}{
         transform: scale(0.8);
         margin: 0px 20px;
      }
      
     ${media.from('desktop')}{
        transform: scale(1);
        margin: 0px 50px;
        
        &:nth-child(2),&:nth-child(3) {
          margin-bottom: 150px;
         }
    }
`
export const TilesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 20px;
    
    ${media.from('tablet')}{
      flex-direction: row;
      justify-content: center;
      padding-bottom: 50px;
    }
    
     ${media.from('desktop')}{
        transform: scale(1);
        margin: 0px 45px;
        padding-bottom: 150px;
    }
    
 
`
