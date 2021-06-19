import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FooterContainer = styled.footer`
  background: #AC2747;
  height: 17.8667rem;

  display: flex;
  justify-content: space-between;
`;

export const SociaisContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 5.86rem;
  margin-bottom: 0.8rem;

  div + div {
    margin-left: 0.66rem;
  }

  div {
    width: 2.66rem;
    height: 2.66rem;
    border: none;
    border-radius: 50%;
    background-color: #FEF5F2;

    display: flex;
    justify-content: center;
    align-items: center;  

    svg {
  
    }

  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1.6667rem;
  min-width: 33.3333rem;
  max-height: 10.6rem;
  
  > div {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;
 
  }

  span + span {
    margin-top: 0.4667rem;
  }

  span {

    display: flex;
    align-items: center;

    color: #FFFFFF;
    font-size: 1.06rem;
    line-height: 1.26rem;
    letter-spacing: 0.015em;

    
    img {
      margin-right: 10px;
    }
  }

  button {
    border: none;
    background: transparent;
    background: linear-gradient(to right, #d267a1, #8a7ae0);
    border-radius: 4.32rem;
    border: none;
    box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.22);
    
    width: 7.734rem;
    height: 2.467rem;

    color: #FFF;
    font-weight: 500;
    font-size: 1.067rem;
    line-height: 1.26rem;  
  }
`;