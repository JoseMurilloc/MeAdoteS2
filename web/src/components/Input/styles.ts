import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`

  ${props => props.isFocus ? css`
    background: #FFFFFF;
    border: 1px solid #E10C40;
  ` : css`
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
  `}

  ${props => props.isError && css`
    border: 1px solid #E10C40;
    background: rgba(222, 31, 31, 0.05);
  `}


  box-sizing: border-box;
  border-radius: 30px;


  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 1.5rem;
 
  width: 18.4rem;
  height: 2.46rem;
 
  padding-left: 1.2rem;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: none;    
    color: #393A3A;
    width: 70%;
    font-size: 0.8rem; 
    
    &::placeholder {
      font-size: 0.8rem;    
      color: rgba(57, 58, 58, 0.5);;
    }
  }
  
  img {
    width: 1.45rem;
    height: 1.46rem;
    margin-right: 0.5rem;
  }
`;
