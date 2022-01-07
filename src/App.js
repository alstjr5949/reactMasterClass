import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => (props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => (props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
