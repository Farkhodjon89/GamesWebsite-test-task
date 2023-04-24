import React from 'react';
import styled from "styled-components";
import {useRouter} from "next/router";

const StyledSelect = styled.select`
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 100%, .07);
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  appearance: none;
`

const StyledOption = styled.option`
  font-size: 16px;
  background-color: #fff;
  color: #333;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`

const SelectByPlatforms = ({platforms}) => {
    const router = useRouter();

    const handleSortChange = (event) => {
        const platforms = event.target.value;
        router.push({
            pathname: router.pathname,
            query: {...router.query, platforms: platforms},
        });
    };

    return (
        <StyledSelect value={router.query.platforms} onChange={handleSortChange}>
            {platforms.map(({id, name}) => (
                <StyledOption value={id} key={id}>{name}</StyledOption>
            ))}
        </StyledSelect>
    );
};

export default SelectByPlatforms;