import styled from "styled-components";

export const RegisterButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  width: 200px;
  background: #90ee90;
  color: #1c1c1c;
  border: 2px solid #1c1c1c;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  /* width: 30%; */
  .inputContainer {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 15px auto;

    input {
      padding: 8px;
      background: #fff;
      border: 1px solid #1c1c1c;
      outline: none;
      border-radius: 3px;
    }

    .text-error {
      font-size: 10px;
      font-weight: bold;
      color: #ff6347;
    }
  }

  button {
    margin-top: 15px;
    padding: 10px;
    width: 200px;
    background: #90ee90;
    color: #1c1c1c;
    border: 2px solid #1c1c1c;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;
