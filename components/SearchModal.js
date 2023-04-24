import styled from 'styled-components';
import Portal from "@/components/Portal";
import {useEffect} from "react";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ModalContainer = styled.div`
  border-radius: 8px;
  padding: 24px;
  max-width: 80%;
  max-height: 80%;
`;

const SearchModal = ({children}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return (
        <Portal>
            <ModalOverlay>
                <ModalContainer>
                    {children}
                </ModalContainer>
            </ModalOverlay>
        </Portal>
    );
};

export default SearchModal;