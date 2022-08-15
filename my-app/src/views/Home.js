import React from 'react';

import TopIntroduction from '../components/sections/TopIntroduction';
import StudioMap from '../components/sections/StudioMap';
import ArtCollectionGallery from '../components/sections/ArtCollectionGallery';
import WhatWeDo from '../components/sections/WhatWeDo';
import TextToSpeech from "../components/elements/TextToSpeech";

const Home = () => {

  return (
    <>
      <TopIntroduction className="illustration-section-01" />
      <ArtCollectionGallery invertMobile topDivider imageFill className="illustration-section-02" />
      <WhatWeDo topDivider />
      <StudioMap />
      {/*<Cta split />*/}
    </>
  );
}

export default Home;
