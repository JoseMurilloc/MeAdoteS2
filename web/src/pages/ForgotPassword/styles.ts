import styled from 'styled-components';

export const ContainerContent = styled.div`
  width: 388px;
  height: 475px;
  margin-left: 64px;


  form {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;

    padding: 71px 21px 24px 41px;

    > div + div {
      margin-top: 1rem;
    }
    
    div#forgot_password {
      display: flex;
      width: 18.4rem;
      justify-content: flex-end;
      margin-bottom: 0.33rem;
      margin-top: 0.26rem;
      
      span {
        cursor: pointer;
        font-size: 12px;
        line-height: 15px;
        color: #393A3A;
      }
    }


    
    legend {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      color: #393A3A;
      margin-bottom: 5px; 
    }

    h1 {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      color: #393A3A;
      text-transform: uppercase;
      margin-bottom: 6px; 
    }

    p {
      font-size: 14px;
      line-height: 123.52%;
      text-align: justify;
      color: #393A3A;
      width: 270px;
      height: 51px;
      margin-bottom: 24px; 
    }

      div#errorGlobalMessage {
        margin: 0;
        color: #931515;
        font-size: 0.8rem;
        line-height: 123.52%;
        background-color: #93151562;
        border-radius: 0.4rem;
        padding: 3px;
      }

    button {
      background: #BB506A;
      border-radius: 64.75px;
      border: 0;
      width: 7.73rem;
      height: 2.46rem;

      font-size: 1.06rem;
      line-height: 1.26rem;
      letter-spacing: 0.015em;
      
      color: #FFFFFF;
      margin-bottom: 1.66rem;
      margin-top: 1.5rem;
    }
  }  
`;
