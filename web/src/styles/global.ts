import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`


  @media (max-width: 750px) {
    html {
      font-size: 70.5%; // 11.28px
    }
  }

  @media (min-width: 751px) {
    html {
      font-size: 75%; // 12px
    }
  }

  @media (min-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  } 

  @media (min-width: 1400px) {
    html {
      font-size: 100%; // 16px
    }
  }

  *, html {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, input, button {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    outline:none;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }


  .Toastify__toast--success {
    background-color: #58BAA2;
    font-weight: 500;
  }

  .Toastify__toast--error {
    background-color: #D20637;
    font-weight: 500;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 54.1333rem;
    height: 30.4667rem;
    position: relative;
    border-radius: 0.6667rem;
    background: #F3F3F3;
    padding: 45px 49px;

    .containerFlex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .containerImages {
      width: 15.9333rem;
      height: 21.5333rem;
      background: red;
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
        width: 407px;
        height: 100px;
        background: rgba(205, 135, 222, 0.11);
        border-radius: 4.5px;
        padding: 10px 13px;
        color: #393A3A;

        p {
          font-size: 14.4561px;
          line-height: 19px;
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
        border-radius: 4.5px;
        width: 20.2rem;
        height: 4.4rem;
        padding: 6.5px 7px;
        margin-top: 14px;

        h3 {
          font-weight: 600;
          font-size: 14.4561px;
          line-height: 17px;
          text-align: justify;
          color: #393A3A;
          margin-bottom: 5px;
        }

        span {
          font-size: 14.4561px;
          line-height: 17px;
          text-align: justify;
          color: #393A3A;
        }

      }

      > button {
        margin-top: 11.5px;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 6.5333rem;
        height: 1.8rem;
        background: #D7345B;
        border-radius: 1.3333rem;
        border: 0;

        svg {
          margin-right: 2px;
        }

        span {
          font-weight: bold;
          font-size: 0.7333rem;
          line-height: 0.8667rem;

          color: #FFFFFF;
        }
      }
    }

    button.to-adopt {
      background: #BB506A;
      box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.28);
      border-radius: 4.2667rem;
      border: 0;
      width: 7.7333rem;
      height: 2.4667rem;
      margin-left: 40rem;
      margin-top: 1.3333rem;

      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.0667rem;
      line-height: 1.2667rem;
      letter-spacing: 0.015em;

      color: #FFFFFF;
    }
  }

  .react-modal-close {
    position: absolute;
    top: 5%;
    right: 7%;

    border: 0;
    background: transparent;
  }
`;
