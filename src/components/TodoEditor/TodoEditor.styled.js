import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #1a1a1a;
  font-family: "Iosevka Charon Mono", monospace;
  font-size: 15px;
  height: 42px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

export const Button = styled.button`
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #c39d23ff;
  color: #f8f5f0;
  font-family: "Iosevka Charon Mono", monospace;
  font-size: 16px;
  cursor: pointer;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: #4a5a3cff;
  }
`;
