import styled from 'styled-components';

export const ContainerContent = styled.div`
  width: 25.86rem;
  margin-left: 4.26rem;


  form {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;

    padding: 4.7333rem 1.4rem 1.6rem 2.7333rem;

    > div + div {
      margin-top: 1rem;
    }
          
    legend {
      font-weight: bold;
      font-size: 1.0667rem;
      line-height: 1.2667rem;

      color: #393A3A;
      margin-bottom: 5px; 
    }

    h1 {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.9333rem;
      color: #393A3A;
      text-transform: uppercase;
      margin-bottom: 6px; 
    }

    p {
      font-size: 0.9333rem;
      line-height: 123.52%;
      text-align: justify;
      color: #393A3A;
      width: 18rem;
      height: 3.4rem;
    }

    div#errorGlobalMessage {
      color: #931515;
      font-size: 0.8rem;
      line-height: 123.52%;
      background-color: #93151562;
      border-radius: 0.4rem;
      padding: 0.2rem;
    }

    button {
      background: #BB506A;
      border-radius: 4.2667rem;
      border: 0;
      width: 7.73rem;
      height: 2.46rem;

      font-size: 1.06rem;
      line-height: 1.26rem;
      letter-spacing: 0.015em;
      
      color: #FFFFFF;
      margin-bottom: 1.66rem;
      margin-top: 1.6rem;
    }
  }
`;
