import * as Styled from "./LandingPage.styled";
import {
  Navigation,
  Hero,
  ProductCardsContainer,
  Footer,
} from "../../components";

export default function LandingPage(props) {
  return (
    <Styled.LandingPage>
      <Navigation />
      <Hero />
      <ProductCardsContainer limit={2} />
      <Footer />
    </Styled.LandingPage>
  );
}
