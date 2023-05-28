import * as Styled from "./Navigation.styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiWineBottle } from "react-icons/gi";

export default function Navigation(props) {
  return (
    <Styled.Navigation>
      <figure className="burger-menu">
        <RxHamburgerMenu className="burger-menu__icon" />
      </figure>
      <figure className="logo-container">
        <GiWineBottle className="logo-container__icon" />
      </figure>
    </Styled.Navigation>
  );
}
