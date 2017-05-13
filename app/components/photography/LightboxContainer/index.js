/**
*
* LightboxContainer
*
*/

import React from 'react';
// import styled from 'styled-components';
import Lightbox from 'react-images';
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
import Alaska from 'assets/images/lightbox/alaska.jpg';
import Fall from 'assets/images/lightbox/fall.jpg';
import Popup from 'assets/images/lightbox/popup.jpg';
import GroupPose from 'assets/images/lightbox/group_pose.jpg';
import Gopro from 'assets/images/lightbox/gopro.png';
import Fam from 'assets/images/lightbox/fam.jpg';
import Smiles from 'assets/images/lightbox/smiles.jpg';
import Peace from 'assets/images/lightbox/peace.jpg';
import { Image } from 'cloudinary-react';

const LIGHTBOX_IMAGE_SET = [
  {
    src: 'backside_pop_fokxfe',
    caption: 'Test',
  },
  {
    src: 'beach_cleanup_eewmrr',
    caption: 'Test2',
  },
  {
    src: 'crosswalk_z8cqec',
    caption: 'Caption',
  },
  {
    src: 'crowdrise_buddies_nw6mov',
    caption: 'Caption',
  },
  {
    src: 'frontside_snap_rnx9jp',
    caption: 'Test',
  },
  {
    src: 'girl_board',
    caption: 'Test2',
  },
  {
    src: 'got_lannister_ybpjfv',
    caption: 'Caption',
  },
  {
    src: 'group_talking_uxu5dt',
    caption: 'Test2',
  },
  {
    src: 'group_girls',
    caption: 'Caption',
  },
  {
    src: 'group_lesson_ops4yu',
    caption: 'Test',
  },
  {
    src: 'happy_ixfi1d',
    caption: 'Caption',
  },
  {
    src: 'group_guys_h5cfwu',
    caption: 'Caption',
  },
  {
    src: 'high_five_qvfi1e',
    caption: 'Caption',
  },
  {
    src: 'hustlers_qy2exp',
    caption: 'Caption',
  },
  {
    src: 'julie_lake_smm2gr',
    caption: 'Test',
  },
  {
    src: 'kid_surf_fyqkrh',
    caption: 'Test2',
  },
  {
    src: 'kid_surf2_t3vyjt',
    caption: 'Caption',
  },
  {
    src: 'paddle_jaxjb1',
    caption: 'Caption',
  },
  {
    src: 'red_surf_wxwruc',
    caption: 'Test',
  },
  {
    src: 'sami_ghoche',
    caption: 'Test2',
  },
  {
    src: 'skateboard_hd4nhs',
    caption: 'Caption',
  },
  {
    src: 'snowboarding_qx7p7j',
    caption: 'Caption',
  },
  {
    src: 'walking_zrva6x',
    caption: 'Caption',
  },
  {
    src: 'alaska_wnyn7w',
    caption: 'Caption',
  },
  {
    src: 'fall_ktlswp',
    caption: 'Caption',
  },
  {
    src: 'popup_p8pujm',
    caption: 'Caption',
  },
  {
    src: 'group_pose_fczeot',
    caption: 'Caption',
  },
  {
    src: 'gopro_mwuhs1',
    caption: 'Caption',
  },
  {
    src: 'fam_f5m2h6',
    caption: 'Caption',
  },
  {
    src: 'smiles',
    caption: 'Caption',
  },
  {
    src: 'peace_qctxei',
    caption: 'Caption',
  },
];

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

  openLightbox(index) {
    console.log(index)
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
    const childElements = LIGHTBOX_IMAGE_SET.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} width="auto" responsive />
        </div>
      );
    });
    return (
      <div className="wrapper">
        <div className="masonry" style={{ width: '80%', margin: '0 auto' }}>
            {childElements}
          <Lightbox
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            images={LIGHTBOX_IMAGE_SET}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClose={this.closeLightbox}
            backdropClosesModal
          />
        </div>
      </div>
    );
  }
}

LightboxContainer.propTypes = {

};
export default LightboxContainer;
