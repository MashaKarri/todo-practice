import { Input } from "./Filter.styled.js";

const Filter = (props) => {
  return (
    <Input
      value={props.value}
      placeholder="Фільтр по імені"
      onChange={props.onChange}
    />
  );
};

export default Filter;
