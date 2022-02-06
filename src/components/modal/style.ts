import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    0deg,
    rgba(0, 69, 255, 0.8155637254901961) 0%,
    rgba(0, 0, 0, 0.8407738095238095) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  .Container {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);

    color: #000;
    width: 70%;
    height: 60%;
    text-align: center;
    border-radius: 20px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .Edit {
        .inputContainer {
          width: 100%;
          input {
            width: 100%;
            padding: 8px;
            background: #fff;
            border: 1px solid #1c1c1c;
            outline: none;
            border-radius: 3px;
          }
        }

        button {
          margin-top: 15px;
          padding: 5px;
          width: 150px;
          background: #90ee90;
          color: #1c1c1c;
          border: 2px solid #1c1c1c;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
        }
        .cancelar {
          background: #fa8072;
        }
      }

      .Edit,
      form {
        display: flex;
        flex-direction: column;
        width: 70%;
        align-items: center;
        height: 250px;
        justify-content: space-evenly;
      }
      div {
        display: flex;

        .info {
          flex-direction: column;
        }
      }
    }

    .close {
      background-color: transparent;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      right: calc(-100% + 64px);
      top: 16px;
      cursor: pointer;
      display: flex;
      position: relative;

      &:before,
      &:after {
        content: " ";
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }

    .content {
      figure {
        width: 200px;
        img {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      figure {
        width: 100px;
        img {
          width: 100%;
        }
      }
    }
  } ;
`;
