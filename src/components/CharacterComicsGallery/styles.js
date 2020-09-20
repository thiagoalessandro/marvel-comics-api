import styled, {keyframes} from "styled-components";

export const ComicRow = styled.div`
  /* display: flex;
    flex: 1;

    align-items: center;
    width: 100%; */
`;

export const PaginatorButton = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`;

export const PaginatorInfo = styled.em`
  display: flex;
  justify-content: ${({side})=>side};
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
`;


const fadeInSlide = keyframes`
  from{
    opacity: 0;
    margin-top: 300px;
  }
  to{
    opacity: 1;
    margin-top: 36px;
  }
`

export const ComicCol = styled.div`
  margin-top: 36px;
  animation: ${fadeInSlide} 1.2s forwards;
`;

export const ComicCover = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    transition: transform .2s;
    margin: 0 10px;

    &:hover {
        transform: scale(1.15);
    }
`;