import React from 'react';
import styled from "styled-components";
import {useRouter} from "next/router";

const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: 18px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  border-radius: 10px;
  border: none;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`

const Pagination = ({currentPage, pageSize, count}) => {
    const router = useRouter();
    const lastPage = Math.ceil(count / pageSize);
    const query = { ...router.query, page: currentPage };

    const handlePrevClick = () => {
        query.page = currentPage - 1;
        router.push({ pathname: '/', query });
    };

    const handleNextClick = () => {
        query.page = currentPage + 1;
        router.push({ pathname: '/', query });
    };

    return (
        <ButtonsWrapper>
            <StyledButton
                disabled={currentPage <= 1}
                onClick={handlePrevClick}>
                Prev
            </StyledButton>
            <StyledButton
                disabled={currentPage >= lastPage}
                onClick={handleNextClick}>
                Next
            </StyledButton>
        </ButtonsWrapper>
    );
};

export default Pagination;