import * as Styled from "./LandingPage.styled";
import { Navigation, Hero, ProductCardsContainer } from "../../components";

export default function LandingPage(props) {
  return (
    <Styled.LandingPage>
      <Navigation />
      <Hero />
      <ProductCardsContainer />
    </Styled.LandingPage>
  );
}
