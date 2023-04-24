import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  border-radius: 10px;
  top: 50px;
  left: 0;
  background-color: black;
  z-index: 5;
  overflow-y: scroll;
  max-height: 600px;

  @media (min-width: 768px) {
    display: block;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: grey;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: darkgrey;
  }
`

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
`

const StyledName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`

const SearchDropDown = ({games, onClose, onClearInput}) => {

    const handleSelectGame = () => {
        onClearInput();
        onClose();
    }

    return (
        <StyledList>
            {games.map(({id, name, background_image}) => (
                <Link key={id} href={`/game/${id}`}>
                    <StyledItem onClick={handleSelectGame}>
                        {background_image ? (
                            <Image src={background_image} width={60} height={60} alt={name}/>
                        ) : null}
                        <StyledName>{name}</StyledName>
                    </StyledItem>
                </Link>
            ))}
        </StyledList>
    );
};

export default SearchDropDown;