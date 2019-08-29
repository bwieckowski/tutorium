import React from 'react'
import styled from "styled-components"

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Row: React.FC = ( {children} ) => (
  <RowWrapper>
    {children}
  </RowWrapper>
);

export default Row;
