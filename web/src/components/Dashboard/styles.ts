import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const SideBar = styled.div`
  min-width: 167px;
  height: 100vh;
  background: ${({theme}) => theme.colors.ternary.solid};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  
  .logoContainer {
    padding-bottom: 12px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  
  ul  li {
    a.active {
      box-shadow: inset 2px 1px 8px rgba(0, 0, 0, 0.16);
      border-radius: 8px;
    }

    a {
      padding: 0 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 36px;
    }

    margin-top: 24px;
   
    span {
      font-size: 12px;
      line-height: 15px;
      color: ${({theme}) => theme.colors.text.light};
      margin-left: 7px;
    }
  }
`;

export const Notifications = styled.div`
  
  display: flex;
  align-items: center;

  position: absolute;
  right: 45px;
  top: 20px;

  
  div.noficationContainer {
    background: ${({theme}) => theme.colors.text.light};
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.16);

    width: 42px;
    height: 41px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
 }

  button {

    display: flex;
    justify-content: center;
    align-items: center;

    width: 162px;
    height: 40px;
    margin-left: 32px;

    background: ${({theme}) => theme.colors.ternary.solid};
    box-shadow: 0px 4px 12px ${({theme}) => theme.colors.ternary.opacity_60};
    border-radius: 22px;
    border: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
  } 
`;
