/**
*
* LightboxContainer
*
*/

import React from 'react';
// import styled from 'styled-components';
import Lightbox from 'react-images';
import Masonry from 'react-masonry-component';
import BackPop from 'assets/images/lightbox/backside_pop.jpg';
import Cleanup from 'assets/images/lightbox/beach_cleanup.jpg';
import Crosswalk from 'assets/images/lightbox/crosswalk.jpg';
import Buddies from 'assets/images/lightbox/crowdrise_buddies.jpg';
import Snap from 'assets/images/lightbox/frontside_snap.png';
import Girl from 'assets/images/lightbox/girl_board.jpg';
import GoT from 'assets/images/lightbox/got_lannister.jpg';
import Girls from 'assets/images/lightbox/group_girls.jpg';
import Guys from 'assets/images/lightbox/group_guys.png';
import Lesson from 'assets/images/lightbox/group_lesson.jpg';
import GroupTalk from 'assets/images/lightbox/group_talking.jpg';
import Happy from 'assets/images/lightbox/happy.jpg';
import High5 from 'assets/images/lightbox/high_five.jpg';
import Hustlers from 'assets/images/lightbox/hustlers.jpg';
import Julie from 'assets/images/lightbox/julie_lake.jpg';
import Kid from 'assets/images/lightbox/kid_surf.png';
import Kid2 from 'assets/images/lightbox/kid_surf2.png';
import Paddle from 'assets/images/lightbox/paddle.png';
import Red from 'assets/images/lightbox/red_surf.jpg';
import Sami from 'assets/images/lightbox/sami_ghoche.jpg';
import Skate from 'assets/images/lightbox/skateboard.png';
import Snow from 'assets/images/lightbox/snowboarding.jpg';
import Walking from 'assets/images/lightbox/walking.png';

const LIGHTBOX_IMAGE_SET = [
  {
    src: BackPop,
    caption: 'Test',
  },
  {
    src: Cleanup,
    caption: 'Test2',
  },
  {
    src: Crosswalk,
    caption: 'Caption',
  },
  {
    src: Buddies,
    caption: 'Caption',
  },
  {
    src: Snap,
    caption: 'Test',
  },
  {
    src: Girl,
    caption: 'Test2',
  },
  {
    src: GoT,
    caption: 'Caption',
  },
  {
    src: Girls,
    caption: 'Caption',
  },
  {
    src: Guys,
    caption: 'Caption',
  },
  {
    src: Lesson,
    caption: 'Test',
  },
  {
    src: GroupTalk,
    caption: 'Test2',
  },
  {
    src: Happy,
    caption: 'Caption',
  },
  {
    src: High5,
    caption: 'Caption',
  },
  {
    src: Hustlers,
    caption: 'Caption',
  },
  {
    src: Julie,
    caption: 'Test',
  },
  {
    src: Kid,
    caption: 'Test2',
  },
  {
    src: Kid2,
    caption: 'Caption',
  },
  {
    src: Paddle,
    caption: 'Caption',
  },
  {
    src: Red,
    caption: 'Test',
  },
  {
    src: Sami,
    caption: 'Test2',
  },
  {
    src: Skate,
    caption: 'Caption',
  },
  {
    src: Snow,
    caption: 'Caption',
  },
  {
    src: Walking,
    caption: 'Caption',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage() {
    this.gotoNext();
  }

  render() {
    const childElements = LIGHTBOX_IMAGE_SET.map((element) => {
      return (
        <div>
          <img src={element.src} style={{ height: '150px', padding: '1%' }} />
        </div>
      );
    });
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Masonry
          className='my-gallery-class'
          options={masonryOptions} // default {}
          onClick={this.openLightbox}
      >
          {childElements}
        </Masonry>
        <Lightbox
          isOpen={this.state.lightboxIsOpen}
          images={LIGHTBOX_IMAGE_SET}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClose={this.closeLightbox}
          backdropClosesModal
        />
      </div>
    );
  }
}

LightboxContainer.propTypes = {

};
export default LightboxContainer;

// images={[{ src: BackPop }, { src: Cleanup }, { src: Crosswalk }, { src: Buddies }, { src: Snap }, { src: Girl }, { src: GoT }, { src: Girls }, { src: Guys }, { src: Lesson }, { src: GroupTalk }, { src: Happy }, { src: High5 }, { src: Hustlers }, { src: Julie }, { src: Kid }, { src: Kid2 }, { src: Paddle }, { src: Red }, { src: Sami }, { src: Skate }, { src: Snow }, { src: Walking }]}

