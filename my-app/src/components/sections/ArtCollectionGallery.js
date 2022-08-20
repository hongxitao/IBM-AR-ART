import React from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from "../elements/Button";
import TextToSpeech from "../elements/TextToSpeech";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const ArtCollectionGallery = ({
                                className,
                                topOuterDivider,
                                bottomOuterDivider,
                                topDivider,
                                bottomDivider,
                                hasBgColor,
                                invertColor,
                                invertMobile,
                                invertDesktop,
                                alignTop,
                                imageFill,
                                ...props
                              }) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Explore our Art collections',
    paragraph: 'We demonstrate our successful past and cutting-edge technology via our interactive arts'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className={splitClasses}>
            <TextToSpeech></TextToSpeech>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left"
                   data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  celebrate our past and value
                </div>
                <h3 className="mt-0 mb-12">
                  <a href={"blank"}><u>THINK</u></a>
                </h3>
                <p className="m-0">
                  Over the past 100 years, hundreds of millions of IBMers, clients, customers and business partners all
                  over the globe have helped IBM make the world work better. Learn the culture of independent thinkers
                  and impassioned sellers, empowering a large, dispersed workforce.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/think-sign.png')}
                  alt="Features split 03"
                  width={528}
                  height={396}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left"
                   data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <a href={"./model/brick/brick.html"}>Our successful stories</a>
                  <br/>
                  <a href={"./phone-web/artworkPage/racecar.html"}>Our very successful stories</a>
                </div>
                <h3 className="mt-0 mb-12">
                  <a href={"blank"}><u>Statue wall</u></a>
                </h3>
                <p className="m-0">
                  In an era of intense competitive pressure, our clients are working with us to change the playing field
                  and drive real business success. And we want to give them a chance to spread the word. Explore our
                  client stories, ranging from NHS, Fox to American Airlines.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/statue-wall.webp')}
                  alt="Features split 01"
                  width={528}
                  height={396}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right"
                   data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Redefine computing
                </div>
                <h3 className="mt-0 mb-12">
                  <a href={"blank"}><u>Quantum Computer</u></a>
                </h3>
                <p className="m-0">
                  IBM Quantum leads the world in quantum computing. This nascent technology is widely expected to solve
                  valuable problems that today’s most powerful classical supercomputers cannot solve and never will. See
                  the animation to know how quantum computer works.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/quantum-computer.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left"
                   data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Create and deliver value Faster
                </div>
                <h3 className="mt-0 mb-12">
                  <a href={"blank"}><u>Hybrid Cloud & AI Brick</u></a>
                </h3>
                <p className="m-0">
                  The new generation of hybrid cloud enables you to build and manage across any cloud with a common
                  platform, allowing you to skill once, build once and manage from a single pane of glass. Try if you
                  can put the building blocks together.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/hybrid-cloud.webp')}
                  alt="Features split 03"
                  width={528}
                  height={396}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right"
                   data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  A new way to learn
                </div>
                <h3 className="mt-0 mb-12">
                  <a href={"blank"}><u>Machine Learning Race Track</u></a>
                </h3>
                <p className="m-0">
                  IBM has a rich history with machine learning. One of its own, Arthur Samuel, is credited for coining
                  the term, “machine learning”. IBM Watson Machine Learning supports the machine learning lifecycle end
                  to end. See how a machine driver learn to drive from scratch.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/machine learning.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

ArtCollectionGallery.propTypes = propTypes;
ArtCollectionGallery.defaultProps = defaultProps;

export default ArtCollectionGallery;
