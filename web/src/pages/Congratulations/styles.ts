import styled from 'styled-components';

export const Container = styled.div`

  height: 85vh;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 1.6rem;
  padding: 0.4667rem 5.86rem;

  background: rgba(255, 255, 255, 0.01);


  div.content {

    width: 36.0667rem;
    height: 20.1333rem;
    background: rgba(255, 255, 255, 0.01);

    padding: 3.6rem 2.0667rem 4.5333rem 1.3333rem;

    h1 { 
      color: #58BAA2;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    p {
      font-size: 1.0667rem;
      line-height: 1.2667rem;
      letter-spacing: 0.015em;
      color: #393A3A;
      width: 32.6667rem;
      height: 5.0667rem;
    }

    div.containerLocation {
      height: 2.6667rem;
      display: flex;
      align-items: center;
      margin-top: 1.6rem;

      span {
        font-size: 0.8rem;
        line-height: 1rem;
        text-align: justify;
        letter-spacing: 0.015em;
        color: #0D4747;
      }
    }

    div.circleGreen {

      display: flex;
      justify-content: center;
      align-items: center;

      width: 9.8rem;
      height: 2.6667rem;

      background: #FFFFFF;
      border: 0.5px solid #58BAA2;
      box-sizing: border-box;
      border-radius: 0.5333rem;

      margin-top: 1.0667rem;

      span {
        font-size: 0.8rem;
        line-height: 1rem;
        text-align: justify;
        letter-spacing: 0.015em;
        color: #393A3A;
      }
    }
  }


`;
