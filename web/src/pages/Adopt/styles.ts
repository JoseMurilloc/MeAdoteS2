import styled from 'styled-components';

export const Container = styled.div`
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

  form {
    position: relative;
    margin-right: 5.8667rem;
    

    .newFriendLogo {
      position: absolute;
      top: 0.5333rem;
      right: 1.0667rem;
    }

    padding: 1.4667rem 0rem 1rem 2.4rem;
    width: 26.3333rem;
    height: 21.5333rem;
    background: rgba(214, 214, 214, 0.15);
    border-radius: 1.3333rem;

    @media(max-width: 1200px) {
      width: 53.9333rem;
      height: 27.8rem;
      margin-left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    legend {
      font-weight: bold;
      font-size: 1.4667rem;
      line-height: 1.7333rem;
      color: #393A3A;
      padding-bottom: 1.0667rem;
    }

    div + div {
      margin-top: 0.8rem;
    }

    div.buttonSend {
      width: 18rem;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    button {
      background: #BB506A;
      border-radius: 4.3333rem;
      border: 0;
      width: 7.7333rem;
      height: 2.4667rem;
      margin-top: 1.6rem;

      font-size: 1.0667rem;
      line-height: 1.2667rem;
      letter-spacing: 0.015em;
      color: #FFFFFF;
    }

    span {
      font-size: 0.8rem;
      line-height: 1rem;
      color: #393A3A;

      a {
        text-decoration: underline;
        color: #393A3A;
      }
    }
  }
`;

export const ModalDetailsPet = styled.div`
  .containerFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(196, 196, 196, 0.07);
    width: 53.9333rem;
    height: 27.8rem;
    padding: 2.6rem 3.5333rem 4.1333rem 2.7333rem;
    
  }

  .containerImages {
    width: 15.9333rem;
    height: 21.5333rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(119, 35, 139, 0.03);
    border-radius: 5px;

    img {
      width: 13.9333rem;
      height: 13.8667rem;
      border-radius: 4px;
    }
    
    button {
      background: transparent;
      border: 1px solid transparent;
      margin: 0;
      img {
        width: 4.4667rem;
        height: 4.2667rem;
        border-radius: 4px;
      }
    }
  }

  .info {
    h1 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.9333rem;
      line-height: 1.1333rem;
      text-align: justify;
      color: #58BAA2;
      margin-bottom: 0.3667rem;
    }

    .description {
      width: 27.1333rem;
      height: 6.6667rem;
      background: rgba(205, 135, 222, 0.11);
      border-radius: 0.3rem;
      padding: 0.6667rem 0.8667rem;
      color: #393A3A;

      p {
        font-size: 0.9333rem;
        line-height: 1.2667rem;
        text-align: justify;
      }
    }

    .infoPetCards {
      display: flex;
      justify-content: space-around;
      margin-top: 0.9333rem;

      aside {
        background: linear-gradient(97.12deg, #C46FD9 7.88%, #9926B6 150.78%);
        border-radius: 10.1114rem;
        width: 5.7333rem;
        height: 1.5333rem;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 0.7333rem;
        line-height: 0.8667rem;
      }
      .yellow-gradient {
        background: linear-gradient(94.28deg, #FBBA13 14.2%, #EDB31F 115.47%);
        color: #414225;
      }
      .red-gradient {
        background: linear-gradient(96.44deg, #BB506A -21.66%, #95213D 119.87%);
      }
      .green-gradient {
        background: linear-gradient(96.12deg, #58BAA2 -33.22%, #288A73 111.25%);
      }

    }

    .detailsPerson {
      background: rgba(252, 187, 19, 0.11);
      border-radius: 0.3rem;
      width: 20.2rem;
      height: 4.4rem;
      padding: 0.4333rem 0.4667rem;
      margin-top: 0.9333rem;

      h3 {
        font-weight: 600;
        font-size: 0.9333rem;
        line-height: 1.1333rem;
        text-align: justify;
        color: #393A3A;
        margin-bottom: 0.3333rem;
      }

      span {
        font-size: 0.9333rem;
        line-height: 1.1333rem;
        text-align: justify;
        color: #393A3A;
      }

    }

    > button {
      margin-top: 0.8rem;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 6.5333rem;
      height: 1.8rem;
      background: #D7345B;
      border-radius: 1.3333rem;
      border: 0;

      svg {
        margin-right: 0.1333rem;
      }

      span {
        font-weight: bold;
        font-size: 0.7333rem;
        line-height: 0.8667rem;

        color: #FFFFFF;
      }
    }
  }
`;