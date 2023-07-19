import { Link } from "react-router-dom";
import styled from "styled-components";

import ReactLogo from "../assets/react.svg";
import JestLogo from "../assets/jest.png";
import StorybookLogo from "../assets/storybook.png";
import StyleLogo from "../assets/style.png";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e7ebee;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LogoImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface StyledLinkProps {
  primary?: string;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  background-color: ${(props) => (props.primary ? "#3182ce" : "#48bb78")};
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  margin: 5px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>¡Bienvenido!</Title>
      <LogoGrid>
        <LogoContainer>
          <LogoImage src={ReactLogo} alt="React" />
        </LogoContainer>
        <LogoContainer>
          <LogoImage src={JestLogo} alt="TypeScript" />
        </LogoContainer>
        <LogoContainer>
          <LogoImage src={StorybookLogo} alt="Redux" />
        </LogoContainer>
        <LogoContainer>
          <LogoImage src={StyleLogo} alt="Tailwind CSS" />
        </LogoContainer>
      </LogoGrid>
      <ButtonContainer>
        <StyledLink to="/Registro/PersonalData" primary="true">
          Registrarse
        </StyledLink>
        <StyledLink to="/Login">Ingresar</StyledLink>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
