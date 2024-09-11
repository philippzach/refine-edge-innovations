"use client";

import SectionTitle from "../Common/SectionTitle";
import ImageSlider from "./ImageSlider";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <ImageSlider />
      </div>
    </section>
  );
};

export default Video;
