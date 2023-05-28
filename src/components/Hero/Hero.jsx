import * as Styled from "./Hero.styled";
import MultipleSlider from "../MultipleSlider/MultipleSlider";
import staticAssets from "../../lib/products.json";

export default function Hero(props) {
  return (
    <Styled.Hero>
      <MultipleSlider>
        {staticAssets.map((el) => (
          <div className="related-products__slider-item" key={el.id}>
            <figure className="related-products__slider-item--fig">
              <img src={el.image} alt="" loading="lazy" />
            </figure>
          </div>
        ))}
      </MultipleSlider>
    </Styled.Hero>
  );
}
