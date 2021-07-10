import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 5.86rem;
  height: 100vh;

  div.header {

    margin: 2.3333rem 0 1.0667rem 0;

    h1 {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
      letter-spacing: 0.015em;
      color: #393A3A;
    }

    span {
      font-size: 1.0667rem;
      line-height: 1.2667rem;
      letter-spacing: 0.015em;
      color: #393A3A;
    }
  }

  div.containerFilter {

    > div { 
      display: flex;
      
      span.active::after {
        content: '';
        margin: 0 auto;
        display: block;
        width: 56%;
        background-color: #D20637;
        border-radius: 30%;
        height: 3px;
      }

      span {
        cursor: pointer;
        font-size: 1.0667rem;
        line-height: 1.2667rem;
        letter-spacing: 0.015em;
        color: #393A3A;
      }     

      span:first-child {
        margin-right: 1.6rem;
      }

      .active {
        color: #D20637;
        font-weight: bold;
      }
    }
  }
`;

export const ListPets = styled.div`
  display: grid !important; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.93rem;
  margin: 1.2rem 0 0 0;


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
`;


