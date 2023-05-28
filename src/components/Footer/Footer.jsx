import * as Styled from "./Footer.styled";
import { GiWineBottle } from "react-icons/gi";

export default function Footer(props) {
  return (
    <Styled.Footer>
      <figure className="logo-container">
        <GiWineBottle className="logo-icon" />
      </figure>
      <div className="additional-links-container">
        <p className="additional-link">About Us</p>
        <p className="additional-link">Products</p>
      </div>
    </Styled.Footer>
  );
}
