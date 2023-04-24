import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  alignItems: center;
  gap: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: initial;
  }
  
  @media (min-width: 1200px) {
    justify-content: initial;
  }
`

const FiltersWrapper = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
};

export default FiltersWrapper;