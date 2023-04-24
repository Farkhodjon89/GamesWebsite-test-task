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

const sortOptions = [
    {value: '-rating', label: 'Rating (high to low)'},
    {value: 'rating', label: 'Rating (low to high)'},
    {value: '-released', label: 'Release date (new to old)'},
    {value: 'released', label: 'Release date (old to new)'},
];

const Select = () => {
    const router = useRouter();

    const handleSortChange = (event) => {
        const ordering = event.target.value;
        router.push({
            pathname: router.pathname,
            query: {...router.query, ordering: ordering},
        });
    };

    return (
        <StyledSelect value={router.query.ordering || sortOptions[0].value} onChange={handleSortChange}>
            {sortOptions.map(({value, label}) => (
                <StyledOption value={value} key={value}>{label}</StyledOption>
            ))}
        </StyledSelect>
    );
};

export default Select;