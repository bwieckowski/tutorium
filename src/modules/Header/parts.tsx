import styled from "styled-components";
import Logo from 'images/logo.svg'
import {colors} from 'utils/config'
import * as media from 'utils/grid'
import Navigation from './Navigation'
import Hamburger from './Hamburger';
import {StyledItem} from './Navigation/parts'

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9999;
`
export const StyledHeader = styled.header`
  position: sticky;
  top:0;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-shadow: 0px 4px 50px ${colors.darkShadow} ;
  z-index: 2;
  
    ${media.from('ipad')}{
      padding: 0 90px;
    } 
    
     ${media.from('desktop')}{
      padding: 0 142px;
    } 

`;

export const HorizontalNavigation = styled(Navigation)`
  flex-direction: row; 
  display: none;
  margin-left: 42px;
  
     // TODO: HideBox
    ${media.from('tablet')}{
      display: block;
    } 
    
    ${StyledItem} {
      font-size: 18px;
      cursor: pointer;
      margin-left: 42px;
    }
`;

interface MobileNavigationProps{
    isOpen: boolean;
}

export const StyledHamburger = styled(Hamburger)`

      // TODO: HideBox
    ${media.from('tablet')}{
      display: none;
    }
`;

export const MobileNavigation = styled(Navigation)`
  display: flex;
  flex-direction: column; 
  width: 100%;
  background-color: ${colors.white};
  transition: transform 0.2s;
  transform: translateY(${ ( props: MobileNavigationProps ) => props.isOpen ? '-100%' : '0'});
  position:absolute;
  z-index: 1;
  padding-bottom: 16px;
  
   // TODO: HideBox
  ${media.from('tablet')}{
      display: none;
    }
  
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
`;
