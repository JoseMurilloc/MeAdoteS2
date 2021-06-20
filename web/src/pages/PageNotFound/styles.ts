import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;

  main {
    margin-top: 62px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 5.8667rem;

    div.content {
      h1 {
        font-weight: bold;
        font-size: 2.1333rem;
        line-height: 3.2rem;
        font-family: 'Poppins', sans-serif;
        color: #393A3A;
      }

      p {
        font-size: 1.0667rem;
        line-height: 1.2667rem;
        text-align: justify;
        width: 32.8667rem;
        color: #393A3A;
      }

      button {
        background: #BB506A;
        border: 1px solid #BB506A;
        border-radius: 4.2667rem;
        width: 7.6667rem;
        height: 2.4rem;
        margin-top: 1.0667rem;

        font-weight: 500;
        font-size: 1rem;
        line-height: 1.2667rem;
        letter-spacing: 0.015em;
        color: #FFFFFF;
      }
    }

    img {
      height: 33.4667rem;
      width: 33.4667rem;
    }
  }
`;