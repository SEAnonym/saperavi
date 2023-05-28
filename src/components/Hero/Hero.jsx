import * as Styled from "./Hero.styled";
import MultipleSlider from "../MultipleSlider/MultipleSlider";

export default function Hero(props) {
  const staticAssets = [1, 2, 3, 4, 5];

  return (
    <Styled.Hero>
      <MultipleSlider>
        {staticAssets.map((el) => (
          <div className="related-products__slider-item" key={el}>
            <figure className="related-products__slider-item--fig">
              <img src="assets/images/wine-bottle.jpg" alt="" loading="lazy" />
            </figure>
          </div>
        ))}
      </MultipleSlider>
    </Styled.Hero>
  );
}
