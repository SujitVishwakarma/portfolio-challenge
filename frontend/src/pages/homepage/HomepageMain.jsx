import React from "react";
import Wrapper from "../../components/Wrapper";
import Hero from "./Hero";
import HeroSectionTwo from "./HeroSectionTwo";
import HeroSectionThree from "./HeroSectionThree";

const HomepageMain = () => {
  return (
    <Wrapper className="flex flex-col">
      <Hero/>
      <HeroSectionTwo />
      <HeroSectionThree/>
    </Wrapper>
  );
};

export default HomepageMain;
