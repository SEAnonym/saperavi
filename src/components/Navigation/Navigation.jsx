import { Link } from "react-router-dom";
import * as Styled from "./Navigation.styled";
import { GiWineBottle } from "react-icons/gi";

export default function Navigation(props) {
  return (
    <Styled.Navigation>
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to={"/products"}>Products</Link>
        </li>
        <li className="navbar-list-item">
          <Link to={"/aboutus"}>About Us</Link>
        </li>
      </ul>
      <Link to={"/"}>
        <figure className="logo-container">
          <GiWineBottle className="logo-container__icon" />
        </figure>
      </Link>
    </Styled.Navigation>
  );
}
