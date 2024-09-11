"use client";

import SectionTitle from "../Common/SectionTitle";
import ImageSlider from "./ImageSlider";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Alte Teile wie Neu ausehen lassen"
          paragraph="Mit guter Qualität und fairen Preisen sind wir Ihr richtiger Ansprechpartner"
          center
          mb="80px"
        />
        <ImageSlider />
      </div>
    </section>
  );
};

export default Video;
