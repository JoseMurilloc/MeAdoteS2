import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 5.86rem;
  
  .header {
    margin-top: 3.9333rem;
    width: 45.7333rem;

    h1 {
      font-weight: bold;
      font-size: 2.6667rem;
      line-height: 4rem;
      color: #393A3A;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 1.0667rem;
      line-height: 1.2667rem;
      text-align: justify;
      color: #393A3A;
    }
  }

  .containerFilter {
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.4rem;


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


    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 6.4667rem;
      height: 2.0667rem;
      border-radius: 3.6rem;
      border: none;
      background: rgba(196, 196, 196, 0.13);
      color: #252223;
    }
  }
`;

export const ListFriends = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.93rem;
    
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

export const ContainerSearchAnimal = styled.div`
  margin-bottom: 3.3333rem;

  select {
    padding: 0 1.0667rem;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border-radius: 2rem;
    width: 15.8rem;
    height: 2.4667rem;

    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 0.015em;
    color: rgba(57, 58, 58, 0.58);
  }

  select + select {
    margin-left: 0.8667rem;
  }

  @media(max-width: 917px) {
    select:last-child {
      margin-top: 1.3333rem;
      margin-left: 0;
    }
  }
`;