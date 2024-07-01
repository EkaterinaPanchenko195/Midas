import styled from "styled-components";
import logo from "../images/Logo@2x.svg";
import fire from "../images/fire.svg";
import arrow from "../images/arrow.svg";
import search from "../images/search.svg";
import account from "../images/account.svg";
import basket from "../images/ basket.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Logo src={logo} />
        </Block>
        <Block>
          <Nav>
            <BlockNav>
              <Link>АКЦИИ</Link>
              <IconNav src={fire} />
            </BlockNav>
            <BlockNav>
              <Link>ГОРЯЧЕЕ</Link>
              <IconNav src={arrow} />
            </BlockNav>
            <BlockNav>
              <Link>ХОЛОДНОЕ</Link>
              <IconNav src={arrow} />
            </BlockNav>
            <Link>СВЕЖАЯ ВЫПЕЧКА</Link>
            <Link>ДЕСЕРТЫ</Link>
            <Link>НАПИТКИ</Link>
          </Nav>
        </Block>
        <Block>
          <WrapperBlock>
            <IconLink src={search}></IconLink>
            <IconLink src={account}></IconLink>
            <IconLink src={basket}></IconLink>
          </WrapperBlock>
        </Block>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 500;
  height: 120px;
`;

const Block = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

const Link = styled.div`
  cursor: pointer;
`;

const BlockNav = styled.div`
  display: flex;
  gap: 5px;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
`;

const IconNav = styled.img`
  width: 18px;
  height: 18px;
`;

const IconLink = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const WrapperBlock = styled.nav`
  display: flex;
  gap: 40px;
`;
