import {
  AboutMeContainer,
  DescHeading,
  DescContainer,
  MyImage,
  MyImageContainer,
  DescHighlight,
  DescWrapper,
  DescDetail,
  DescResidence,
} from "./aboutMeStyled";

import PankajGurbani from "../../images/PankajGurbani.png";
import { Link } from "react-router-dom";
import CTA from "../cta/CTA";
import { RightFlex } from "../common/styled";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <MyImageContainer>
        <MyImage src={PankajGurbani} />
      </MyImageContainer>

      <DescContainer>
        <DescWrapper>
          <DescHeading>Pankaj Gurbani</DescHeading>
          <DescHighlight>
            Pankaj is a creative web designer and developer who loves to build
            visually appealing and enjoyable websites.
          </DescHighlight>
          <DescDetail>
            He specializes in developing websites that empathize with the users,
            are easy to use, minimalistic & stand out.
          </DescDetail>
          {/* <DescDetail>
            He enjoys working with clients who share the same values.
          </DescDetail> */}
          <DescDetail>
            Apart from that, he loves playing guitar, watching marvel movies &
            writing about himself in 3rd person :)
          </DescDetail>
          <DescResidence>- with ♥️ from India</DescResidence>
          <RightFlex style={{ marginTop: "20px" }}>
            <Link className="link" to="/contact">
              <CTA label="HIRE ME" />
            </Link>
          </RightFlex>
        </DescWrapper>
      </DescContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
