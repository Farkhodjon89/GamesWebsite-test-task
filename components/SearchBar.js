import React, {useState} from 'react';
import styled from "styled-components";
import SearchDropDown from "@/components/SearchDropDown";
import useSearchGames from "@/hooks/useSearchGames";
import SearchModal from "@/components/SearchModal";
import SearchDropDownPortal from "@/components/SearchDropDownPortal";


const SearchContainer = styled.div`
  position: relative;
  width: 80%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #f5f5f5;
  padding: 5px 10px;
  color: black;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {games, setGames, searchGames} = useSearchGames();

    const lengthCheck = games && games.length > 0;

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleClearInput = () => {
        setValue('')
        setGames([]);
    }

    const handleChangeInput = React.useCallback(async (event) => {
        setValue(event.target.value);
        const query = event.target.value;

        try {
            const games = await searchGames(query);
            if (event.target.value === query) {
                setGames(games.results);
            }

        } catch (error) {
            console.error(error);
        }
    }, [searchGames]);

    return (
        <SearchContainer style={{marginLeft: '40px'}}>
            <StyledInput
                type='text'
                onChange={handleChangeInput}
                value={value}
                placeholder='Название игры'
                onFocus={() => setIsOpen(true)}
            />
            {lengthCheck && (
                <ClearButton onClick={handleClearInput}>&#xd7;</ClearButton>
            )}
            {lengthCheck && (
                <SearchDropDown
                    onClose={handleClose}
                    onClearInput={handleClearInput}
                    games={games}
                />
            )}
            {lengthCheck && (
                <SearchModal>
                    <SearchDropDownPortal onClearInput={handleClearInput} games={games}/>
                </SearchModal>
            )}
        </SearchContainer>

    );
};

export default SearchBar;