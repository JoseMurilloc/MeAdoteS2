import styled from 'styled-components';

export const PaginationNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;

  li {
    list-style: none;
  }

  li + li {
    margin-left: 4px;
  }
  
  li button.button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  li button {
    width: 36px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0.768473px solid rgba(57, 58, 58, 0.3);

    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12.2956px;
    line-height: 15px;
    letter-spacing: 0.015em;
    color: #393A3A;
  }
  
  button.active {
    background: #D20637;
    color: #FFF;
  }
`;

