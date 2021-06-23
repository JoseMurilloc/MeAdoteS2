import styled from 'styled-components';

export const Container = styled.div`
  height: 89.4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    > img {
      width: 4.5333rem;
      height: 4.5333rem;
      border-radius: 50%;
    }

    div {
      margin-top: 12px;
    }

    div.ButtonsContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        width: 116px;
        height: 37px;
        border-radius: 64.75px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button.save {
        background: #BB506A;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.015em;
        color: #FFFFFF;
      }

      button.cancel {
        border: 1px solid rgba(43, 48, 48, 0.44);
        font-size: 16px;
        line-height: 19px;
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
    font-size: 14px;
    line-height: 17px;
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