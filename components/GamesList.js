import React, {useState} from 'react';
import GameCard from "@/components/GameCard";
import styled from "styled-components";
import Pagination from "@/components/Pagination";


const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  margin: 20px 0;
  justify-items: center;

  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
    margin: 40px 0;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
  }

  
`

const GamesList = ({games, pageSize, currentPage, count}) => {

    return (
        <>
            <StyledCardContainer>
                {games.map(game => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </StyledCardContainer>
            <Pagination pageSize={pageSize} currentPage={currentPage} count={count}/>
        </>

    );
};

export default GamesList;