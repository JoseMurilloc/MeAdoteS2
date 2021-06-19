import styled from 'styled-components';

interface ContainerProps extends React.HTMLProps<HTMLButtonElement> {}

export const Container = styled.div<ContainerProps>`
  background: rgba(196, 196, 196, 0.18);
  border-radius: 0.3rem;
  width: 12.17rem;
  height: 15.07rem;
  padding: 0.367rem 0.49rem;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 0.61rem;
    height: 9.17rem;
    width: 11.2rem;
  }

  span {
    line-height: 18px;
    font-weight: 500;
    font-size: 0.978rem;
    margin-left: 0.43rem;
  }


  div.contentCard {
    display: flex;
    align-items: center;
    margin-top: 1.026rem;

    div.year {
      width: 3.73rem;
      height: 1.19rem;
      
      border-radius: 1.1333rem;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 0.6667rem;
      line-height: 0.8667rem;
      color: #FFFFFF;
    }
  }
`;
