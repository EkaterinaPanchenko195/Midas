import Header from "./pages/Header";
import bg from "./images/bg.png";
import styled from "styled-components";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <Container>
      <Header></Header>
      <Main>
        <MainSection />
      </Main>
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
  height: 300vh;
  font-family: "Montserrat", sans-serif;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
