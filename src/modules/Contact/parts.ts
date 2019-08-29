import styled from "styled-components";
import {colors} from 'utils/config';
import * as media from 'utils/grid';

export const StyledWrapper = styled.div`
    padding: 30px 32px;
`;

export const Header = styled.h1`
  color ${colors.greyDarker};
  padding-bottom: 32px;
  font-size: 48px;
`;

export const Describe = styled.p`
  font-size: 18px;
  padding-bottom: 16px;
  color: ${colors.greyDarker};
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  color: ${colors.black}
  font-size: 18px;

`;

export const Item = styled.li``;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;
export const StyledInput = styled.input`
  border: 2px solid ${colors.primary};
  padding: 15px;
  border-radius: 30px;
  margin-bottom: 30px;
  
    &:focus {
        outline: none;
        box-shadow: 0 0 10px #719ECE;
    }
`;
export const StyledLabel = styled.label`
  color:${colors.primary};
  font-weight: bold;
  font-size: 12px;
  margin-left: 20px;
  margin-bottom: 5px;
`

export const StyledSubmit = styled(StyledInput)`
  background-color: ${colors.primatyLight};
  color: ${colors.white};
  border: none;
  
  ${media.from('tablet')}
  {
    width: 200px;
  }

`;

export const StyledTextarea= styled.textarea`
  border: 2px solid ${colors.primary};
  padding: 15px;
  border-radius: 30px;
  margin-bottom: 30px;
   &:focus {
        outline: none;
        box-shadow: 0 0 10px #719ECE;
    }
`;


