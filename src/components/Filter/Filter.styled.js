import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 18px;
  border-radius: 5px;
  border: 1px solid #1a1a1a;
  font-family: "Iosevka Charon Mono", monospace;
  font-size: 15px;
  color: #1a1a1a;
  height: 42px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;
