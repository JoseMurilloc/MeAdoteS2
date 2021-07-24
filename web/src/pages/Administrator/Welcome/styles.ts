import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 46px 24px;
`;

export const WelcomeContainer = styled.div`
   background: rgba(35, 138, 197, 0.09);
  border-radius: 17px;
  position: relative;
  padding: 16px;

  display: flex;
  justify-content: space-between;

  width: 543px;
  height: 117px;

  aside {
    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #393A3A;
      font-family: 'Poppins', sans-serif;
    }
    span {
      font-size: 14px;
      line-height: 21px;
      color: #393A3A;
      font-family: 'Poppins', sans-serif;
    }
  }

  img {
    position: absolute;
    top: -35px;
    right: 20px;
  }
`;
