import styled from 'styled-components';
import homeStart from '../../assets/images/homeStart.png'

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const Start = styled.section`
  height: 100vh;
  padding: 0 5.86rem;
  scroll-snap-align: start;
  background-image: 
    linear-gradient(rgba(57,58,58,0.62),rgba(57,58,58,0.62)),url(${homeStart});
  background-size: cover;

  display: flex;
  justify-content: space-between;
  align-items: center;

  aside + aside {
    margin-left: 7.66rem;
  }

  aside { 

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 36.86rem;

   
    h1 {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 2.66rem;
      line-height: 3.13rem;
    }

    p {
      color: #FFFFFF;
      font-size: 1.46rem;
      line-height: 133.02%;
      margin-top: 0.53rem;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.06rem;
      

      background: #AC2747;
      border: 0;
      width: 10.13rem;
      height: 3.33rem;
      box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.22);
      border-radius: 1.9rem;

      font-weight: 500;
      font-size: 1.06rem;
      line-height: 1.26rem;
      letter-spacing: 0.015em;
      text-transform: uppercase;
      color: #FFF;

      svg {
        margin-left: 7px;
      }

      &:active {
        animation: none;
      }

    }

  }
`;

export const About = styled.section`
height: 100vh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 3.33rem;


  aside { 
    display: flex;
    margin-top: 20px;
    
    div.green {
      background: #58BAA2;
    }
    
    div.purple {
      background: rgba(196, 111, 217, 0.82);
    }

    div.yellow {
      background: #D5D83F;
    }

    div { 
      display: flex;
      justify-content:center;
      align-items: center;
      background: #BB506A;
      border-radius: 50%;
      width: 3.426rem;
      height: 3.426rem;
    }

    div + div {
      margin-left: 1.166rem;
    }
  }


  main {
    display: flex;
    justify-content: center;
    align-items: center;

    section.team::before {
      content: "";
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.28);
      left: -16.66rem;
      top: 10.33rem; 
      transform: rotate(90deg);
      position: relative;
      display: block;
    }

    section.content {
      width: 611px;
      height: 198px;
      margin-right:120px;
      h1 {
        color: var(--monza);
        font-size: 24px;
        line-height: 28px;
      }

      p {
        color: var(--black-cape-cod);
        font-size: 1.06rem;
        line-height: 2.2rem;
        text-align: justify;
        margin-top: 0.33rem;
      }
    }
  }
`;

export const Help = styled.section`
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  
  header { 
    margin-top: 6.66rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #BB506A;
    padding: 0 11.2rem;

    img {
      width: 21.8rem;
      height: 13.93rem;
    }

    h1 {
      color: #fff;
      font-size: 1.6rem;
      line-height: 1.86rem;
    }

    p {
      font-size: 1.066rem;
      line-height: 1.4rem;
      text-align: justify;
      margin-top: 5px;

      color: #FFFFFF;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    h1 {
      font-size: 1.6rem;
      line-height: 1.866rem;
      color: #393A3A;
    }

    section {
      display: flex;
      align-items: center;
      margin-top: 2.53rem;

      div.card {
        background: rgba(123, 20, 20, 0.05);
        border-radius: 0.5rem;

        width: 158px;
        height: 175px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & + div {
          margin-left: 2.33rem;
        }

        img {
          margin-bottom: 0.73rem;
          width: 3.3333rem;
          height: 3.3333rem;
          border-radius: 0.8667rem;
        }

        span {
          color: var(--black-cape-cod);
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
`;

export const AdoptionFriend = styled.section`
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5.93rem;

  legend {
    font-weight: 500;
    margin-top: 2rem;
    font-size: 1.71rem;
    line-height: 2.6rem;
    color: #393A3A;
  }

  div.containerViewMore {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 1.6667rem;
  }
  button {
    width: 6.48rem;
    height: 2.06rem;
    border: 0.837838px solid rgba(86, 87, 88, 0.31);
    border-radius: 3.61rem;
    background: transparent;

    color: #393A3A;
    font-size: 0.93rem;
    line-height: 1.13rem;
  }

  aside {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;  
    grid-gap: 0.93rem;
    height: 70%;


    @media (max-width: 1190px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;  
      grid-gap: 0.93rem;
    }

    @media (max-width: 880px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;  
      grid-gap: 0.93rem;
    }
  }
`
