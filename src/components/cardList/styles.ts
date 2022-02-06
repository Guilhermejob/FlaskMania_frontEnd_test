import styled from "styled-components";

export const EditDeleteContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;

  .editDelet {
    width: 100%;
    justify-content: space-evenly;
    svg {
      height: 25px;
      width: 25px;
    }
  }
`;

export const ModalInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  color: #eee;
  figure {
    width: 45%;
  }
  .info {
    width: 45%;
    h1 {
      font-size: 25px;
    }
    p {
      font-weight: bold;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  width: 80%;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-top: 20px;
  button {
    background: transparent;
    border: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover {
      background: lightgray;
    }
  }
`;
