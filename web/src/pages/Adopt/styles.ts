import styled from 'styled-components';

export const Container = styled.div`
  height: 85vh;

  display: flex;
  flex-direction: row;
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

  button.adoptButton {
    position: absolute;
    right: 5.8667rem;
    bottom: 1.3333rem;
    width: 6.1333rem;
    height: 2.6rem;

    background: #BB506A;
    border-radius: 2rem;
    border: none;
    font-weight: bold;
    font-size: 1.0667rem;
    line-height: 1.2667rem;
    letter-spacing: 0.015em;
    color: #FFFFFF;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 500px;

  .noticeContainer {
    display: flex;
    align-items: center;
    margin-top: 0.5333rem;

    background: #FFE29C;
    border: 0.0333rem solid #FBBA13;
    border-radius: 0.5333rem;
    width: 17rem;

    span {
      font-size: 0.8rem;
      line-height: 1rem;
      text-align: justify;
      color: #594216;
    }
  }
`;

export const About = styled.div`
  border-left: 3px solid #D20637;
  border-radius: 2px;
  padding-left: 6px;

  h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.015em;
      color: #393A3A;
    }

  p {
    display: flex;
    align-items: center;

    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.015em;
    color: #393A3A;

    margin-left: 7px;
  }
`

export const CardAdopt = styled.div`
  margin-top: 54px;
  
  div#title {    
    border-left: 0.2rem solid #D20637;
    border-radius: 0.1333rem;
    padding-left: 0.4rem;
    margin-bottom: 0.6rem;

    h3 {     
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 1.0667rem;
      line-height: 1.6rem;
      text-align: justify;
      color: #393A3A;
  
      border-left: 2px;
    }
  }

  div.container {
    display: flex;
    align-items: center;
    background: rgba(196, 196, 196, 0.15);
    border-radius: 5px 5px 0px 0px;
  }
  
  div.photos {
    display: flex;
    padding: 1.4rem 1.2rem;
    

    img {
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
      border-radius: 0.5333rem;
      height: 9.3333rem;
      width: 6.8667rem;
    }

    div.inactivePhotos {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1.0667rem;

      img {
        width: 3rem;
        height: 2.8667rem;
        border-radius: 1.4rem;
        opacity: 0.5;
      }

      img + img {
        margin-top: 0.6667rem;
      }
    }
  }

  div.content {
    background: #BB506A;
    color: #FFF;
    
    height: 16rem;
    margin-left: 1.4rem;
    
    padding: 2.6667rem;
    border-radius: 7rem 0 0 7rem;

    > h3 {
      font-weight: bold;
      font-size: 1rem;
      line-height: 0.7333rem;
      text-align: justify;

      color: #FFFFFF;
      margin-bottom: 0.6rem;
    }
    p {
      width: 16.2667rem;
      font-size: 0.8rem;
      line-height: 0.8rem;
      text-align: justify;
    }
  }

  div.shortsCards {

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.4rem;
    margin-bottom: 0.8667rem;
  

    .card {
      background: 
        linear-gradient(97.12deg, #C46FD9 7.88%, #9926B6 150.78%);
      border-radius: 8px;
      width: 3.6667rem;
      height: 1.3333rem;

      font-weight: 500;
      font-size: 0.4667rem;
      line-height: 0.5333rem;
      text-align: justify;

      display: flex;
      justify-content: center;
      align-items: center;

      color: #FFFFFF;
    }

    .card-vaccinated {
      background: 
        linear-gradient(94.28deg, #FBBA13 14.2%, #EDB31F 115.47%);
  
      color: #414225;
    }

    .card-gender {
      background: 
        linear-gradient(96.44deg, #BB506A -21.66%, #95213D 119.87%);
    }

    .card-age {
      background: 
        linear-gradient(96.12deg, #58BAA2 -33.22%, #288A73 111.25%);
    }

    div.card + div.card {
      margin-left: 0.2rem;
    }
  }

  div.behavior {
    h3 {
      font-weight: 600;
      font-size: 0.8667rem;
      line-height: 0.7333rem;
      text-align: justify;
      color: #FFFFFF;
      margin-bottom: 0.2rem;
    }

    span {
      font-size: 0.6667rem;
      line-height: 0.7333rem;
      text-align: justify;
      color: #FFFFFF;
    }
  }
`;