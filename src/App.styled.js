import styled from "styled-components";

export const Container = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 25px;
  border: solid 1px #1e3a2b;
  border-radius: 5px;
  font-family: "Iosevka Charon Mono", monospace;
  color: #1a1a1a;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;

  svg {
    margin-left: 10px;
    font-size: 1em;
  }
`;
