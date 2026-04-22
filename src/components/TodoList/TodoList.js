import { Timer } from "../Timer/Timer.js";

import { List, Item, Text, DeleteButton } from "./TodoList.styled.js";

const ToDoList = ({ todos, onDelete, onToggle }) => {
  return (
    <List>
      {todos.map((item) => {
        return (
          <Item key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggle(item.id)}
            />

            <Text completed={item.completed}>{item.text}</Text>

            <Timer isRunning={!item.completed} createdAt={item.createdAt} />

            <DeleteButton onClick={() => onDelete(item.id)}>
              &#10007;
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};

export default ToDoList;
