import styled from 'styled-components';

export const Container = styled.div`
  height: 89.4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      width: 4.5333rem;
      height: 4.5333rem;
      border-radius: 50%;
    }

    div {
      margin-top: 0.8rem;
    }

    div.ButtonsContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 7.7333rem;
        height: 2.4667rem;
        border-radius: 4.3333rem;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button.save {
        background: #BB506A;
        font-size: 1.0667rem;
        line-height: 1.2667rem;
        letter-spacing: 0.015em;
        color: #FFFFFF;
        margin-left: 10.2rem;
      }

      button.cancel {
        border: 1px solid rgba(43, 48, 48, 0.44);
        font-size: 1.0667rem;
        line-height: 1.2667rem;
        letter-spacing: 0.015em;

        color: rgba(43, 48, 48, 0.58);
      }
    }
  }
`;

export const UploadImageProfile = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  span {
    font-size: 0.9333rem;
    line-height: 1.1333rem;
    color: #252223;
    font-weight: 500;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1rem;
    color: #BB506A;
  }
`