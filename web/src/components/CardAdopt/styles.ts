import styled from 'styled-components';

export const Container = styled.div`
  min-width: 35.0667rem;
  min-height: 12.7333rem;
  border-radius: 1.1333rem;
  border: 0.0667rem solid #BB506A;

  padding: 1.3333rem 2.6667rem;
  position: relative;

  .circle-left {
    position: absolute;
    width: 4rem;
    height: 4rem;
    background: #FFF;
    border-radius: 50%;
    left: -2rem;
    top: 3.6667rem;
  
    border-left: 0.0667rem solid #FFFFFF;
    border-right: 0.1333rem solid #BB506A;
  }

  .circle-right {
    position: absolute;
    width: 4rem;
    height: 4rem;
    background: #FFF;
    border-radius: 50%;
    right: -2rem;
    top: 3.6667rem;
  
    border-right: 0.0667rem solid #FFFFFF;
    border-left: 0.1333rem solid #BB506A;
  }


  main {
    h3 {
      font-weight: bold;
      font-size: 0.6rem;
      line-height: 0.7333rem;
      text-align: justify;
      color: #393A3A;
      text-transform: uppercase;

      margin-bottom: 0.4667rem;
    }

    div.cardInfos {
      display: flex;

      div.card + div.card {
        margin-left: 0.3333rem;
      }

      div.card {
        border-radius: 1.3333rem;
        width: 4.2667rem;
        height: 1.9333rem;
        
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 500;
        font-size: 0.7333rem;
        line-height: 0.8667rem;
        text-align: justify;
        color: #FFFFFF;
      }

      div.card-gender {
        background: #E07A93;
      }

      div.card-vaccinated {
        background: #8A1934;
      }

      div.card-age {
        background: #32947C;
      }

      div.card-castrated {
        background: #F3AD55;
      }
    }

    .wrapperInfoAdopt {
      margin-top: 0.9333rem;
    }

    div.infoAdoptStrongInfo { 
      span {
        font-weight: bold;
      }
    }

    div.infoAdopt {
      display: flex;
      align-items: center;

      span {
        font-size: 0.8rem;
        line-height: 1rem;
        letter-spacing: 0.015em;
        color: #393A3A;
        margin-left: 0.4667rem;
      }
    }
  }

  div.photoPet {
    position: absolute;
    right: 5.3333rem;
    top: 2rem;

    div.box {
      position: relative;
      width: 4.1333rem;
      height: 4.1333rem;
      
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: screen;
      }
    }
  }

  button.localization {
    position: absolute;
    right: 4.3333rem;
    top: 9rem;

    background: #BB506A;
    border-radius: 1.3333rem;
    border: none;
    width: 7.2rem;
    height: 2.3333rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 0.3333rem;
    }

    span {
      font-size: 0.8rem;
      line-height: 1rem;
      letter-spacing: 0.015em;
      color: #FFFFFF;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #bb506a;
    outline: 1px solid rgba(0, 0, 0, 0.3);
    border: 3px solid rgba(255, 255, 255, 0.9);
  }

  ::-webkit-scrollbar:vertical {
    display: none;
  }
  
  > div + div {
    margin-left: 1.3333rem;
  }
`
