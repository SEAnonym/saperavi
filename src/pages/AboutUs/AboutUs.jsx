import * as Styled from "./AboutUs.styled";
import { Navigation } from "../../components";

export default function AboutUs(props) {
  return (
    <Styled.AboutUs>
      <Navigation />
      <div className="container">
        <h2 className="heading">Welcome to Saperavi</h2>
        <p className="paragraph">
          Your go-to destination for crafting unforgettable brand experiences
          for wineries in Georgia.
        </p>
        <p className="paragraph">
          Our team of experts harnesses the power of AI to create branding
          solutions that support your winery's growth.
        </p>
        <p className="paragraph">
          We understand the unique challenges and aspirations of winemakers, and
          our mission is to help you stand out in a crowded market.
        </p>
        <p className="paragraph">
          With our innovative approach, we'll capture the essence of your winery
          and showcase its unique story through captivating branding.
        </p>
        <p className="paragraph">
          Join us as we raise a glass to your success and contribute to the
          flourishing wine industry in Georgia.
        </p>
      </div>
    </Styled.AboutUs>
  );
}
