import styled from 'styled-components';

export const Container = styled.div`
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 1.6rem;
  padding: 0.4667rem 5.86rem;

  div.contentMain {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 89vh;
    margin-top: 2.5333rem;

    @media(max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const FormContainer = styled.div`
  width: 33.3333rem;
  height: 23.3333rem;

  form {
    
    h1 {
      font-weight: 500;
      font-size: 1.0667rem;
      line-height: 1.6rem;
      letter-spacing: 0.015em;
      color: #393A3A;
    }

    p {
      font-size: 0.8rem;
      line-height: 1rem;
      letter-spacing: 0.015em;
      color: rgba(57, 58, 58, 0.8);

      margin-bottom: 1.0667rem;
    }

  }


  .containerInputs {
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0.93rem;

    > div {
      width: 14.0667rem;
      height: 2.4667rem;
    }
  }

  .InformDayAndHour {
    h2 {
      font-weight: 500;
      font-size: 0.8rem;
      line-height: 1rem;
      letter-spacing: 0.015em;
      color: #393A3A;

      margin-top: 1.0667rem;
      margin-bottom: 0.5333rem;
    }

    div.inputsHorizontalFlex {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */

      > div {
        width: 14.0667rem;
        height: 2.4667rem;
      }

      div + div {
        margin-left: 8px;
      }
    }
  }

  .portfolioVaccineContainer {
    h2 {
      font-weight: 500;
      font-size: 1.0667rem;
      line-height: 1.6rem;
      letter-spacing: 0.015em;
      color: #393A3A;
      margin-top: 1.0667rem;
      margin-bottom: 0.5333rem;
    }
  }
  
  .noticeContainer {

      display: flex;
      align-items: center;
      margin-top: 0.5333rem;

      background: #FFE29C;
      border: 0.0333rem solid #FBBA13;
      border-radius: 0.5333rem;
      width: 24.8667rem;

    span {
      font-size: 0.8rem;
      line-height: 1rem;
      text-align: justify;
      color: #594216;
    }
  }
`

export const PortfolioPetVaccine = styled.div`
  width: 33.3333rem;
  height: 10.6667rem;

  border: 0.0333rem solid rgba(57, 58, 58, 0.28);
  border-radius: 0.5333rem;

  /* background: orange; */

  aside:first-child {
    border-radius: 0.5333rem 0.5333rem 0 0;
  }

  aside.c-red {
    background: #BB506A;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1rem;
    text-align: justify;


    span {
      font-size: 0.8rem;
      line-height: 1rem;
      text-align: justify;
      color: #FFFFFF;
    }

    span.status {
      font-weight: 600;
    }
  }

  aside {
   padding: 0 20px;

    width: 100%;  
    height: 2.6667rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;