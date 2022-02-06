import styled from "styled-components";

export const ContainerBackground = styled.div`
  background-color: #6495ed;
  border-radius: 15px;
  border: 5px solid lightgray;
  box-sizing: content;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 0px 15px;

  .waves {
    position: absolute;
    top: 0;
    transform: rotateY(65deg) rotateZ(180deg);
    left: -428px;
    right: 0;

    .wave1 {
      display: none;
    }
  }
`;

export const ContainerProduct = styled.div`
  width: 200px;
  height: 300px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-position-y: -100px;
  background-size: 338%;
  font-family: "Roboto", sans-serif;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  box-sizing: content;
  .content {
    z-index: 1;
    position: relative;
  }

  div figure {
    margin: 0px;
    width: 150px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 175px;
    height: 260px;
    div figure {
      width: 100px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    h2 {
      font-size: 20px;
    }
  }
`;
