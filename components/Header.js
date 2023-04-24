import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #151515;
  color: #fff;
  margin-bottom: 20px;
  top: 0;
  position: sticky;
  z-index: 55;
  
  @media (min-width: 768px) {
    position: static;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;

  @media (min-width: 768px) {
    padding: 20px 20px;
  }

  @media (min-width: 992px) {
    padding: 20px 40px;
  }
`;

const StyledLogo = styled.p`
  font-size: 20px;
  line-height: normal;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const Header = () => {
    return (
        <StyledHeader>
            <HeaderWrapper>
                <Link href={'/'}>
                    <StyledLogo>RAWG</StyledLogo>
                </Link>
                <SearchBar/>
            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;