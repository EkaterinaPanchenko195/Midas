import Header from "./pages/Header";
import bg from "./images/bg.png";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
`;
