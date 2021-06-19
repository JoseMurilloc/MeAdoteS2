import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  background-color: #FEF5F2;
  color: #393A3A;
  
`;

export const Header = styled.header`

  display: flex;
  justify-content: flex-end;
  padding: 0 5.86rem;
 

  width: 100%;  
  height: 5.7333rem;

  aside {

    display: flex;
    align-items: center;
    justify-content: baseline;

    a {
      width: 7.734rem;
      height: 2.467rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a.sign-up {
      border: none;
      background: transparent;

      background: #D20637;
      border-radius: 4.32rem;
      border: none;
      box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.22);

      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
      border-radius: 4.2667rem;
      color: #fff;
    }

    a.sign-in {
      color: rgba(57, 58, 58, 0.7);
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
    }
  }
`;