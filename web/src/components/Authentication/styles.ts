import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  background-color: ${({theme}) => theme.colors.background};;
  color: ${({theme}) => theme.colors.text.default};
  
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

      background: ${({theme}) => theme.colors.primary.solid};
      border-radius: 4.32rem;
      border: none;
      box-shadow: 0rem 0.2667rem 0.2667rem ${({theme}) => theme.colors.primary.opacity_20};
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
      border-radius: 4.2667rem;
      color: ${({theme}) => theme.colors.text.light};
    }

    a.sign-in {
      color: ${({theme}) => theme.colors.text.default_opacity};
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
    }
  }
`;