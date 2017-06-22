/**
*
* RetreatsContent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Button from './Button';


class RetreatsContent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ paddingTop: '7%', paddingBottom: '5%' }}>
        <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase' }}>Surf & Language Retreats</h3>
        <div className="container" style={{ marginTop: '1%' }}>
          <div className="row">
            <div className="col-sm-6">
              <Image cloudName="kurzweg" publicId="boards" width="300" quality="auto" responsive style={{ width: '100%', display: 'block', margin: '0 auto' }} />
            </div>
            <div className="col-sm-6" style={{ marginTop: '1%' }}>
              <p style={{ lineHeight: '35px', fontSize: '16px', width: '85%', display: 'block', margin: '0 auto', fontFamily: 'Josefin Sans', fontStyle: 'italic' }}>I have been <a href="http://westlalanguagetutor.com/" target="blank" style={{ textDecoration: 'none', color: '#333333' }}>teaching <span style={{ color: '#7C4DFF' }}>Spanish</span>, <span style={{ color: '#FF80AB' }}>French</span> and <span style={{ color: '#108EE9' }}>Portuguese</span></a> for the past 10 years in Los Angeles. I started teaching surfing here in California 6 years ago. I love languages and surfing more than anything. <br />I am not sure there is even a market for what I am proposing, but if there is I would love to take you somewhere awesome for surfing where your target language is spoken. 5-10 of you, 10 days-ish, I make you low-level fluent and you learn how to learn how to surf when I stop holding your hand. LET'S DO THIS!</p>
              <p style={{ lineHeight: '35px', fontSize: '16px', width: '85%', display: 'block', margin: '0 auto', fontFamily: 'Josefin Sans', marginBottom: '2%' }}>-Nick</p>
              <Button onClick={this.props.handleClick}>I'm interested</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RetreatsContent.propTypes = {

};

export default RetreatsContent;
