import styled from "styled-components";
import food from "../images/MainSectionFood.jpg";
import backgroundText from "../images/MainSectionBackgroundText.svg";
import mainSectionPoints from "../images/MainSectionPoints.png";
import mainSectionPoints2 from "../images/MainSectionPoints2.svg";
import basket from "../images/iconBasket.svg";

const MainSection = () => {
  return (
    <Container>
      <BlockMain>
        <BlockWrapper>
          <Title>Доставка готовой еды из фермерских продуктов!</Title>
          <BlockImg />
          <Contact>
            +7 (499) 841-67-2
            <br />
            delivery@midas.rest
          </Contact>
        </BlockWrapper>
      </BlockMain>
      <BlockFood>
        <Img src={food}></Img>
        <Item>
          <TitleItem>Стейк из лосося с овощами</TitleItem>
          <DescriptionTitle>250 г</DescriptionTitle>
          <Description>
            Нежный стейк дикого лосося, пропитанный соком и ароматом слегка
            обжаренных фермерских овощей
          </Description>
          <BlockPrice>
            <Price>45 p</Price>
            <BlockBasket>
              <Basket src={basket} />
            </BlockBasket>
          </BlockPrice>
        </Item>
        <PointsItem />
      </BlockFood>
    </Container>
  );
};

export default MainSection;

const Container = styled.section`
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const BlockMain = styled.div``;
const BlockFood = styled.div`
  position: relative;
`;

const BlockWrapper = styled.div``;

const Title = styled.h2`
  width: 50%;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 25px;
`;

const TitleItem = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const BlockImg = styled.div`
  background-image: url(${mainSectionPoints2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 184px;
  height: 184px;
  margin-bottom: 20px;
  transform: translate(-14px, 0px);
`;

const Contact = styled.h2`
  font-size: 25px;
  font-weight: 500;
`;

const Img = styled.img`
  width: 1170px;
  height: 680px;
`;

const Item = styled.div`
  background-image: url(${backgroundText});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 355px;
  height: 360px;
  padding: 37px 56px;
  position: absolute;
  bottom: -135px;
  left: 81px;
`;

const PointsItem = styled.div`
  background-image: url(${mainSectionPoints});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 364px;
  height: 364px;
  position: absolute;
  bottom: -265px;
  right: -10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const BlockPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  cursor: pointer;
`;

const BlockBasket = styled.div`
  width: 42px;
  height: 42px;
  background-color: rgba(251, 209, 62, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Basket = styled.img`
  width: 26px;
  height: 24px;
`;

const Price = styled.p`
  font-size: 23px;
  font-weight: 800;
`;

const DescriptionTitle = styled.p`
  margin-bottom: 10px;
`;
