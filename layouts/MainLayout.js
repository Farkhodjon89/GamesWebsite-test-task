import React from 'react';
import Header from "@/components/Header";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0px 20px;
  }

  @media (min-width: 992px) {
    padding: 0px 40px;
  }
`;

const MainLayout = ({children}) => {
    return (
        <Container>
            <Header/>
            <Main>{children}</Main>
        </Container>
    );
};

export default MainLayout;