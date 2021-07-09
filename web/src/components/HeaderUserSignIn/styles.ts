import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4667rem 5.86rem;

  img.LogoMeAdote {
    width: 3.7333rem;
    height: 3.7333rem;
    cursor: pointer;
  }

  @media (max-width: 945px) {
    max-width: 80rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > a.containerFavorite {
    display: flex;
    align-items: center;
    justify-content: center;
   
    height: 2.8rem;
    border-radius: 2rem;
    border: 1px solid #393A3A;
    padding: 0.6rem 1rem 0.6rem 0.8667rem;
    cursor: pointer;


    span {
      margin-left: 0.4667rem;
      font-size: 0.9333rem;
      line-height: 1.1333rem;
      color: #393a3a;
    }
  }

  div + div {
    margin-left: 1.8rem;
  }
`;

type ActionUserProps = {
  userLogin?: boolean;
}

export const ActionUser = styled.div<ActionUserProps>`
  position: relative;
  margin-left: 0.5333rem;
  
  div.profile {
    display: flex;
    align-items: center;
    cursor: pointer;

    height: 2.8rem;
    border: 1px solid #393A3A;
    border-radius: 2rem;
    padding: 0.6rem 1rem 0.6rem 0.8667rem;
    
    div.containerProfile  {
      width: 1.6rem;
      height: 1.6rem;
      ${props => props.userLogin && css`
        border: 1px solid #BB506A;
      `}
      border-radius: 50%;
      margin-right: 5px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
    span {
      font-size: 14px;
      color: #393A3A;
    }
  }

  div.menu::before {
    content: "";
    display: block;
    position: absolute;
    top: -1.6rem;
    right: 1rem;
    border-color: transparent transparent #E3E3E3;
    border-style: solid;
    border-width: 0.8rem;
  }

  div.menu {
    position: absolute;
    top: 5.3333rem;
    right: -1rem;
    padding: 0.6667rem 1.3333rem;
    width: 13.3333rem;
    box-sizing: 0 0.3333rem 1.6667rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    transition: 0.5s;
    visibility: hidden;
    opacity: 0;
    border: 0.0667rem solid #E3E3E3;
    z-index: 1000;
    background: #fff; 

    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4667rem;
      color: #393A3A;
      margin-bottom: 0.333rem;
    }

    ul li {
      padding: 10px 0;
      display: flex;
      align-items: center;
      
      &:hover {
        svg {
          opacity: 1;
        }
        a {
          color: #D20637;
          font-weight: 500;
        }
      }

      svg {
        margin-right: 0.6667rem;
        opacity: 0.5;
        transition: 0.5s;
      }

      a {
        font-weight: 300;
        font-size: 1.0667rem;
        line-height: 1.2667rem;
        color: #393A3A;
        transition: 0.5s;
      }
    }

    ul li + li {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  div.active {
    visibility: visible;
    opacity: 1;
  }
`;