import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledList = styled.ul`
  position: absolute;
  width: 100%;
  border-radius: 10px;
  top: 80px;
  left: 0;
`

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
  padding: 15px;
`

const StyledName = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`

const SearchDropDownPortal = ({games}) => {

    return (
        <StyledList>
            {games.map(({id, name, background_image}) => (
                <Link key={id} href={`/game/${id}`}>
                    <StyledItem>
                        {background_image ? (
                            <Image src={background_image} width={50} height={50} alt={name}/>
                        ) : null}
                        <StyledName>{name}</StyledName>
                    </StyledItem>
                </Link>
            ))}
        </StyledList>
    );
};

export default SearchDropDownPortal;