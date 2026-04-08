import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  background: #f8f5f0;
`;

export const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#9b4848ff" : "#1A1A1A")};
`;

export const DeleteButton = styled.button`
  border: none;
  background: transparent;
  color: #b22222;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    color: #7f1212;
  }
`;
