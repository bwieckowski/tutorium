import styled from "styled-components";
import {colors} from "../../utils/config";
import * as media from 'utils/grid';
import {CarouselProvider, Slider} from "pure-react-carousel";
import {Dot, ButtonBack,ButtonNext} from 'pure-react-carousel'

export const Header = styled.h2`
  text-align: center;
  font-size: 48px;
  color: ${colors.grey};
  position: relative;
    bottom: 70px;
`;

export const StyledWrapper = styled.div`
    padding: 150px 0 0 0;
    background-color: ${colors.white};
    ${media.from('desktop')}{
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        position: relative;
        top: -150px;
    }
`;

export const StyledCarouselProvider= styled(CarouselProvider)`
  display: flex;
  flex-direction: column;
`;

export const StyledDot = styled(Dot)`
  border: solid 1px ${colors.darkShadow};
  border-radius: 100%;
  padding: 4px;
  margin: 0 10px;
  background-color: ${colors.white};
  &:disabled{
    background-color: ${colors.greyLight};
  }
`;

export const StyledSlider = styled(Slider)`
    height: 330px;
    width: 100%;
    
    ${media.from('tablet')}
    {
      height: 200px;
    }
`;

export const StyledButtonBack = styled(ButtonBack)`
  display:none;
  ${media.from('tablet')}
  {
    display: block;
  }
  
`

export const StyledButtonNext = styled(ButtonNext)`
  display: none;
   ${media.from('tablet')}
  {
    display: block;
  }
`
export const StyledRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const DotWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  
  
`;

