import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 5.86rem;
  position: fixed;
  width: 100%;
  z-index: 1;
  /* background-color: transparent; */


  div.content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 0.6rem;
    max-width: 81rem;
    margin: 0 auto;
    
    img {
      height: 3.7333rem;
      width: 3.7333rem;
      cursor: pointer;
    }
  }

  div.content nav ul { 
    display: flex;

    li { 
      margin-left: 1.6rem;

      line-height: 1.13px;
      font-size: 0.933rem;
      color: #FFF;
      text-decoration: none;
  
      &.activeSection {
        font-weight: bold;
        color: #D20637;
      }
    
      &:first-child {
        margin-left: 0;
      }
      

    }
  }

  aside {

    button {
      border: none;
      background: transparent;
      width: 7.7333rem;
      height: 2.4667rem;
    }

    button#openButton {
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
      margin-right: 1.6rem; 
      color: #FFF;    
    }

    button#registerButton {
      background: #BB506A;
      border-radius: 2rem;
      border-radius: 4.32rem;
      border: none;
      box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.22);
      
      color: #fff;
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
    }
  }
`;
